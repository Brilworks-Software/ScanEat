import { db, storage } from '../firebase'
import { FirebaseAuthTypes, EmailAuthProvider } from '@react-native-firebase/auth';
import {getDoc, collection, doc, setDoc, updateDoc, serverTimestamp, getDocs, deleteDoc, query, where} from '@react-native-firebase/firestore';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ref, deleteObject } from '@react-native-firebase/storage';

/**
 * User document structure in Firestore
 */
export interface User {
  userId: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * UserService handles user document operations in Firestore
 */
export class UserService {
  /**
   * Creates a user document in Firestore when a new user is created
   * @param user - Firebase Auth user object
   * @returns Promise<void>
   */
  static async createUserDocument(user: FirebaseAuthTypes.User): Promise<void> {
    try {
      const userRef = doc(collection(db, 'users'), user.uid);
      
      // Check if user document already exists
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        console.log('User document already exists:', user.uid);
        return;
      }

      // Create user document
      const userData: Omit<User, 'createdAt' | 'updatedAt'> & {
        createdAt: any;
        updatedAt: any;
      } = {
        userId: user.uid,
        email: user.email || undefined,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(userRef, userData);
      console.log('User document created successfully:', user.uid);
    } catch (error: any) {
      console.error('Error creating user document:', error);
      throw new Error(`Failed to create user document: ${error.message}`);
    }
  }

  /**
   * Gets a user document from Firestore
   * @param userId - User ID
   * @returns Promise<User | null>
   */
  static async getUserDocument(userId: string): Promise<User | null> {
    try {
      const userRef = doc(collection(db, 'users'), userId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        return null;
      }

      const data = userDoc.data() as Partial<User> & {
        createdAt: { toDate: () => Date };
        updatedAt: { toDate: () => Date };
      };
      return {
        userId: data?.userId || userId,
        email: data?.email,
        createdAt: data?.createdAt?.toDate() || new Date(),
        updatedAt: data?.updatedAt?.toDate() || new Date(),
      };
    } catch (error: any) {
      console.error('Error getting user document:', error);
      throw new Error(`Failed to get user document: ${error.message}`);
    }
  }

  /**
   * Updates a user document in Firestore
   * @param userId - User ID
   * @param updates - Partial user data to update
   * @returns Promise<void>
   */
  static async updateUserDocument(
    userId: string,
    updates: Partial<Omit<User, 'userId' | 'createdAt'>>
  ): Promise<void> {
    try {
      const userRef = doc(collection(db, 'users'), userId);
      await setDoc(
        userRef,
        {
          ...updates,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      console.log('User document updated successfully:', userId);
    } catch (error: any) {
      console.error('Error updating user document:', error);
      throw new Error(`Failed to update user document: ${error.message}`);
    }
  }

  /**
   * Deletes all documents in a subcollection
   * @param userId - User ID
   * @param subcollectionName - Name of the subcollection
   * @returns Promise<number> - Number of documents deleted
   */
  private static async deleteSubcollection(
    userId: string,
    subcollectionName: string
  ): Promise<number> {
    try {
      const subcollectionRef = collection(db, 'users', userId, subcollectionName);
      const querySnapshot = await getDocs(subcollectionRef);
      
      const deletePromises = querySnapshot.docs.map((docSnapshot: FirebaseFirestoreTypes.DocumentSnapshot) => 
        deleteDoc(docSnapshot.ref)
      );
      await Promise.all(deletePromises);
      
      return querySnapshot.size;
    } catch (error: any) {
      console.error(`Error deleting subcollection ${subcollectionName}:`, error);
      throw new Error(`Failed to delete ${subcollectionName}: ${error.message}`);
    }
  }

  /**
   * Deletes all nutrition analyses for a user
   * @param userId - User ID
   * @returns Promise<number> - Number of analyses deleted
   */
  private static async deleteUserNutritionAnalyses(userId: string): Promise<number> {
    try {
      const nutritionAnalysisCollection = collection(db, 'nutrition-analysis');
      const q = query(nutritionAnalysisCollection, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      
      const deletePromises = querySnapshot.docs.map(async (docSnapshot: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = docSnapshot.data();
        
        // Delete associated image from Firebase Storage if it exists
        if (data?.imageFileName) {
          try {
            const imagePath = `nutrition-analysis/${data.imageFileName}`;
            const imageRef = ref(storage, imagePath);
            await deleteObject(imageRef);
            console.log('Deleted nutrition analysis image:', imagePath);
          } catch (imageError: any) {
            // Log but don't fail if image deletion fails (image might not exist)
            console.warn('Failed to delete nutrition analysis image:', imageError);
          }
        }
        
        // Delete the analysis document
        return deleteDoc(docSnapshot.ref);
      });
      
      await Promise.all(deletePromises);
      console.log(`Deleted ${querySnapshot.size} nutrition analyses for user ${userId}`);
      return querySnapshot.size;
    } catch (error: any) {
      console.error('Error deleting nutrition analyses:', error);
      throw new Error(`Failed to delete nutrition analyses: ${error.message}`);
    }
  }

  /**
   * Deletes a user account and all associated data
   * This method:
   * 1. Re-authenticates the user with their password
   * 2. Deletes all user subcollections (history, favorites, products, preferences)
   * 3. Deletes all nutrition analyses and associated images
   * 4. Deletes the user document
   * 5. Deletes the Firebase Auth account
   * 
   * @param user - Firebase Auth user object
   * @param password - User's password for re-authentication
   * @returns Promise<void>
   */
  static async deleteAccount(
    user: FirebaseAuthTypes.User,
    password: string
  ): Promise<void> {
    try {
      // Step 1: Re-authenticate the user
      if (!user.email) {
        throw new Error('User email is required for account deletion');
      }

      const credential = EmailAuthProvider.credential(user.email, password);
      await user.reauthenticateWithCredential(credential);

      // Step 2: Delete all subcollections
      const subcollections = ['history', 'favorites', 'products', 'preferences'];
      const deleteSubcollectionPromises = subcollections.map((subcollection) =>
        this.deleteSubcollection(user.uid, subcollection)
      );
      
      // Step 3: Delete all nutrition analyses and associated images
      const deleteNutritionAnalysesPromise = this.deleteUserNutritionAnalyses(user.uid);
      
      // Execute all deletions in parallel
      await Promise.all([...deleteSubcollectionPromises, deleteNutritionAnalysesPromise]);
      console.log('All subcollections and nutrition analyses deleted successfully');

      // Step 4: Delete the user document
      const userRef = doc(collection(db, 'users'), user.uid);
      await deleteDoc(userRef);
      console.log('User document deleted successfully');

      // Step 5: Delete the Firebase Auth account
      await user.delete();
      console.log('Firebase Auth account deleted successfully');
    } catch (error: any) {
      console.error('Error deleting account:', error);
      
      // Provide user-friendly error messages
      if (error.code === 'auth/wrong-password') {
        throw new Error('Incorrect password. Please try again.');
      } else if (error.code === 'auth/requires-recent-login') {
        throw new Error('Please log out and log back in before deleting your account.');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('User account not found.');
      } else {
        throw new Error(`Failed to delete account: ${error.message}`);
      }
    }
  }
}

