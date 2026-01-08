import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
  
} from '@react-native-firebase/firestore';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { db } from '../firebase';
import { ProductHistory } from '../../types/product';
import { Product } from '../../types/product';
import { ProductService } from './ProductService';
import { analyzeProductHealth } from '../healthAnalysis';

/**
 * HistoryService handles product scan history operations in Firestore
 * History is stored at: users/{userId}/history/{historyId}
 * Only stores: barcode, name, imageUrl, and score (health score out of 100)
 */
export class HistoryService {
  /**
   * Converts Firestore Timestamp to Date
   */
  private static convertTimestamp(timestamp: any): Date {
    if (timestamp?.toDate) {
      return timestamp.toDate();
    }
    if (timestamp instanceof Date) {
      return timestamp;
    }
    return new Date();
  }

  /**
   * Converts history data from Firestore to ProductHistory
   */
  private static convertHistoryData(data: any, historyId: string, userId: string): ProductHistory & { id: string } {
    return {
      id: historyId,
      userId,
      barcode: data.barcode,
      name: data.name,
      imageUrl: data.imageUrl,
      score: data.score,
      scannedAt: this.convertTimestamp(data.scannedAt),
    };
  }

  /**
   * Adds a product scan to the user's history
   * Only stores: barcode, name, imageUrl, and health score
   * @param userId - User ID
   * @param product - Product data to add to history
   * @returns Promise<string> - The ID of the created history document
   */
  static async addToHistory(userId: string, product: Product): Promise<string> {
    try {
      const historyRef = collection(db, 'users', userId, 'history');
      // Analyze health directly in the browser
      console.log("product:", product);
      const healthScore = analyzeProductHealth(product);

      // Combine data
      const fullProduct: Product = {
        ...product,
        healthScore
      };
        
      const historyData = {
        userId,
        barcode: fullProduct.barcode,
        name: fullProduct.name,
        imageUrl: fullProduct.imageUrl || null,
        score: healthScore.nutriScoreValue || healthScore.score || 0,
        scannedAt: serverTimestamp(),
      };

      const docRef = await addDoc(historyRef, historyData);
      console.log('Product added to history successfully:', userId, product.barcode);
      return docRef.id;
    } catch (error: any) {
      console.error('Error adding product to history:', error);
      throw new Error(`Failed to add product to history: ${error.message}`);
    }
  }

  /**
   * Updates the scan time for an existing history entry, or creates a new one if it doesn't exist
   * If a history entry exists for the barcode, updates its scannedAt timestamp
   * If no history entry exists (no createTime), fetches product data and creates a new entry
   * @param userId - User ID
   * @param barcode - Product barcode
   * @returns Promise<string> - The ID of the updated or created history document
   */
  static async updateOrCreateHistory(userId: string, barcode: string): Promise<string> {
    try {
      // Find existing history entry for this barcode
      const historyRef = collection(db, 'users', userId, 'history');
      const q = query(
        historyRef,
        where('barcode', '==', barcode),
        orderBy('scannedAt', 'desc'),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        // Update existing history entry's scannedAt timestamp
        const docSnapshot = querySnapshot.docs[0];
        await updateDoc(docSnapshot.ref, {
          scannedAt: serverTimestamp(),
        });
        console.log('History updated successfully:', userId, barcode);
        return docSnapshot.id;
      }
      
      // No existing history entry found, create a new one
      // Fetch product data first
      const product = await ProductService.getProduct(barcode);
      
      if (!product) {
        throw new Error(`Product not found for barcode: ${barcode}`);
      }
      
      // Create new history entry
      return await this.addToHistory(userId, product);
    } catch (error: any) {
      console.error('Error updating or creating history:', error);
      throw new Error(`Failed to update or create history: ${error.message}`);
    }
  }

  /**
   * Gets all history items for a user, ordered by most recent first
   * @param userId - User ID
   * @param limitCount - Maximum number of history items to return (default: 50)
   * @returns Promise<(ProductHistory & { id: string })[]>
   */
  static async getUserHistory(
    userId: string,
    limitCount: number = 50
  ): Promise<(ProductHistory & { id: string })[]> {
    try {
      const historyRef = collection(db, 'users', userId, 'history');
      const q = query(
        historyRef,
        orderBy('scannedAt', 'desc'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const historyItems: (ProductHistory & { id: string })[] = [];

      querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = doc.data();
        historyItems.push(this.convertHistoryData(data, doc.id, userId));
      });

      return historyItems;
    } catch (error: any) {
      console.error('Error getting user history:', error);
      throw new Error(`Failed to get user history: ${error.message}`);
    }
  }

  /**
   * Gets a specific history item by ID
   * @param userId - User ID
   * @param historyId - History document ID
   * @returns Promise<(ProductHistory & { id: string }) | null>
   */
  static async getHistoryItem(
    userId: string,
    historyId: string
  ): Promise<(ProductHistory & { id: string }) | null> {
    try {
      const historyRef = doc(db, 'users', userId, 'history', historyId);
      const historyDoc = await getDoc(historyRef);

      if (!historyDoc.exists()) {
        return null;
      }

      const data = historyDoc.data();
      return this.convertHistoryData(data, historyId, userId);
    } catch (error: any) {
      console.error('Error getting history item:', error);
      throw new Error(`Failed to get history item: ${error.message}`);
    }
  }

  /**
   * Gets history items for a specific barcode
   * @param userId - User ID
   * @param barcode - Product barcode
   * @param limitCount - Maximum number of history items to return (default: 10)
   * @returns Promise<(ProductHistory & { id: string })[]>
   */
  static async getHistoryByBarcode(
    userId: string,
    barcode: string,
    limitCount: number = 10
  ): Promise<(ProductHistory & { id: string })[]> {
    try {
      const historyRef = collection(db, 'users', userId, 'history');
      const q = query(
        historyRef,
        where('barcode', '==', barcode),
        orderBy('scannedAt', 'desc'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const historyItems: (ProductHistory & { id: string })[] = [];

      querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = doc.data();
        historyItems.push(this.convertHistoryData(data, doc.id, userId));
      });

      return historyItems;
    } catch (error: any) {
      console.error('Error getting history by barcode:', error);
      throw new Error(`Failed to get history by barcode: ${error.message}`);
    }
  }

  /**
   * Deletes a specific history item
   * @param userId - User ID
   * @param historyId - History document ID
   * @returns Promise<void>
   */
  static async deleteHistoryItem(userId: string, historyId: string): Promise<void> {
    try {
      const historyRef = doc(db, 'users', userId, 'history', historyId);
      const historyDoc = await getDoc(historyRef);

      if (!historyDoc.exists()) {
        throw new Error('History item not found');
      }

      await deleteDoc(historyRef);
      console.log('History item deleted successfully:', userId, historyId);
    } catch (error: any) {
      console.error('Error deleting history item:', error);
      throw new Error(`Failed to delete history item: ${error.message}`);
    }
  }

  /**
   * Deletes all history items for a user
   * @param userId - User ID
   * @returns Promise<number> - Number of items deleted
   */
  static async clearHistory(userId: string): Promise<number> {
    try {
      const historyRef = collection(db, 'users', userId, 'history');
      const querySnapshot = await getDocs(historyRef);

      const deletePromises = querySnapshot.docs.map((doc: FirebaseFirestoreTypes.DocumentSnapshot) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      console.log('History cleared successfully:', userId);
      return querySnapshot.size;
    } catch (error: any) {
      console.error('Error clearing history:', error);
      throw new Error(`Failed to clear history: ${error.message}`);
    }
  }

  /**
   * Gets the most recent history item for a user
   * @param userId - User ID
   * @returns Promise<(ProductHistory & { id: string }) | null>
   */
  static async getMostRecentHistory(userId: string): Promise<(ProductHistory & { id: string }) | null> {
    try {
      const history = await this.getUserHistory(userId, 1);
      return history.length > 0 ? history[0] : null;
    } catch (error: any) {
      console.error('Error getting most recent history:', error);
      throw new Error(`Failed to get most recent history: ${error.message}`);
    }
  }

  /**
   * Gets history items within a date range
   * @param userId - User ID
   * @param startDate - Start date (inclusive)
   * @param endDate - End date (inclusive)
   * @param limitCount - Maximum number of history items to return (default: 50)
   * @returns Promise<(ProductHistory & { id: string })[]>
   */
  static async getHistoryByDateRange(
    userId: string,
    startDate: Date,
    endDate: Date,
    limitCount: number = 50
  ): Promise<(ProductHistory & { id: string })[]> {
    try {
      const historyRef = collection(db, 'users', userId, 'history');
      const startTimestamp = Timestamp.fromDate(startDate);
      const endTimestamp = Timestamp.fromDate(endDate);

      const q = query(
        historyRef,
        where('scannedAt', '>=', startTimestamp),
        where('scannedAt', '<=', endTimestamp),
        orderBy('scannedAt', 'desc'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const historyItems: (ProductHistory & { id: string })[] = [];

      querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = doc.data();
        historyItems.push(this.convertHistoryData(data, doc.id, userId));
      });

      return historyItems;
    } catch (error: any) {
      console.error('Error getting history by date range:', error);
      throw new Error(`Failed to get history by date range: ${error.message}`);
    }
  }
}

