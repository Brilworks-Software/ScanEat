import { db } from '../firebase'
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {getDoc, collection, doc, setDoc, updateDoc, serverTimestamp} from '@react-native-firebase/firestore';

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
}

