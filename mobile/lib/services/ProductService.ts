import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  serverTimestamp,
  deleteDoc,
} from '@react-native-firebase/firestore';
import { db } from '../firebase';
import { Product } from '../../types/product';
import { sanitizeForFirestore } from '../utils/firestoreSanitizer';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

/**
 * ProductService handles product operations in Firestore
 * Products are stored in two places:
 * 1. Global products collection: products/{barcode} - for caching/sharing
 * 2. User-specific products: users/{userId}/products/{barcode} - for user-specific data
 */
export class ProductService {
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
   * Converts Product with Firestore timestamps to Product with Date objects
   */
  private static convertProductData(data: any): Product {
    return {
      ...data,
      createdAt: this.convertTimestamp(data.createdAt),
      updatedAt: this.convertTimestamp(data.updatedAt),
      // Convert nested timestamps if they exist
      ingredients: data.ingredients?.map((ing: any) => ({
        ...ing,
      })) || [],
      healthScore: {
        ...data.healthScore,
        reasons: data.healthScore?.reasons || [],
        recommendations: data.healthScore?.recommendations || [],
        warnings: data.healthScore?.warnings || [],
      },
    } as Product;
  }

  /**
   * Saves a product to the global products collection
   * @param product - Product data to save
   * @returns Promise<void>
   */
  static async saveProduct(product: Product): Promise<void> {
    try {
      const productRef = doc(db, 'products', product.barcode);

      const productData = {
        ...product,
        createdAt: product.createdAt || serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      // Sanitize data to remove undefined values and replace with defaults
      const sanitizedData = sanitizeForFirestore(productData);

      await setDoc(productRef, sanitizedData, { merge: true });
      console.log('Product saved successfully:', product.barcode);
    } catch (error: any) {
      console.error('Error saving product:', error);
      throw new Error(`Failed to save product: ${error.message}`);
    }
  }

  /**
   * Gets a product from the global products collection by barcode
   * @param barcode - Product barcode
   * @returns Promise<Product | null>
   */
  static async getProduct(barcode: string): Promise<Product | null> {
    try {
      const productRef = doc(db, 'products', barcode);
      const productDoc = await getDoc(productRef);

      if (!productDoc.exists()) {
        return null;
      }

      const data = productDoc.data();
      return this.convertProductData(data);
    } catch (error: any) {
      console.error('Error getting product:', error);
      throw new Error(`Failed to get product: ${error.message}`);
    }
  }

  /**
   * Saves a product for a specific user
   * This creates/updates a user-specific product document
   * @param userId - User ID
   * @param product - Product data to save
   * @returns Promise<void>
   */
  static async saveUserProduct(userId: string, product: Product): Promise<void> {
    try {
      const userProductRef = doc(db, 'users', userId, 'products', product.barcode);

      const productData = {
        ...product,
        userId,
        createdAt: product.createdAt || serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      // Sanitize data to remove undefined values and replace with defaults
      const sanitizedData = sanitizeForFirestore(productData);

      await setDoc(userProductRef, sanitizedData, { merge: true });
      console.log('User product saved successfully:', userId, product.barcode);
    } catch (error: any) {
      console.error('Error saving user product:', error);
      throw new Error(`Failed to save user product: ${error.message}`);
    }
  }

  /**
   * Gets a product for a specific user by barcode
   * @param userId - User ID
   * @param barcode - Product barcode
   * @returns Promise<Product | null>
   */
  static async getUserProduct(userId: string, barcode: string): Promise<Product | null> {
    try {
      const userProductRef = doc(db, 'users', userId, 'products', barcode);
      const userProductDoc = await getDoc(userProductRef);

      if (!userProductDoc.exists()) {
        return null;
      }

      const data = userProductDoc.data();
      return this.convertProductData(data);
    } catch (error: any) {
      console.error('Error getting user product:', error);
      throw new Error(`Failed to get user product: ${error.message}`);
    }
  }

  /**
   * Gets all products for a specific user
   * @param userId - User ID
   * @param limitCount - Maximum number of products to return (default: 50)
   * @returns Promise<Product[]>
   */
  static async getUserProducts(
    userId: string,
    limitCount: number = 50
  ): Promise<Product[]> {
    try {
      const userProductsRef = collection(db, 'users', userId, 'products');
      const q = query(
        userProductsRef,
        orderBy('updatedAt', 'desc'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];

      querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = doc.data();
        products.push(this.convertProductData(data));
      });

      return products;
    } catch (error: any) {
      console.error('Error getting user products:', error);
      throw new Error(`Failed to get user products: ${error.message}`);
    }
  }

  /**
   * Gets products for a user filtered by category
   * @param userId - User ID
   * @param category - Product category to filter by
   * @param limitCount - Maximum number of products to return (default: 50)
   * @returns Promise<Product[]>
   */
  static async getUserProductsByCategory(
    userId: string,
    category: string,
    limitCount: number = 50
  ): Promise<Product[]> {
    try {
      const userProductsRef = collection(db, 'users', userId, 'products');
      const q = query(
        userProductsRef,
        where('category', '==', category),
        orderBy('updatedAt', 'desc'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];

      querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = doc.data();
        products.push(this.convertProductData(data));
      });

      return products;
    } catch (error: any) {
      console.error('Error getting user products by category:', error);
      throw new Error(`Failed to get user products by category: ${error.message}`);
    }
  }

  /**
   * Updates a product for a specific user
   * @param userId - User ID
   * @param barcode - Product barcode
   * @param updates - Partial product data to update
   * @returns Promise<void>
   */
  static async updateUserProduct(
    userId: string,
    barcode: string,
    updates: Partial<Omit<Product, 'barcode' | 'createdAt' | 'userId'>>
  ): Promise<void> {
    try {
      const userProductRef = doc(db, 'users', userId, 'products', barcode);
      
      const updateData = {
        ...updates,
        updatedAt: serverTimestamp(),
      };

      // Sanitize data to remove undefined values and replace with defaults
      const sanitizedData = sanitizeForFirestore(updateData);

      await setDoc(userProductRef, sanitizedData, { merge: true });
      console.log('User product updated successfully:', userId, barcode);
    } catch (error: any) {
      console.error('Error updating user product:', error);
      throw new Error(`Failed to update user product: ${error.message}`);
    }
  }

  /**
   * Deletes a product for a specific user
   * @param userId - User ID
   * @param barcode - Product barcode
   * @returns Promise<void>
   */
  static async deleteUserProduct(userId: string, barcode: string): Promise<void> {
    try {
      const userProductRef = doc(db, 'users', userId, 'products', barcode);
      const userProductDoc = await getDoc(userProductRef);

      if (!userProductDoc.exists()) {
        throw new Error('Product not found for user');
      }

      await deleteDoc(userProductRef);
      console.log('User product deleted successfully:', userId, barcode);
    } catch (error: any) {
      console.error('Error deleting user product:', error);
      throw new Error(`Failed to delete user product: ${error.message}`);
    }
  }

  /**
   * Searches products for a user by name
   * @param userId - User ID
   * @param searchTerm - Search term to match against product name
   * @param limitCount - Maximum number of products to return (default: 20)
   * @returns Promise<Product[]>
   */
  static async searchUserProducts(
    userId: string,
    searchTerm: string,
    limitCount: number = 20
  ): Promise<Product[]> {
    try {
      const userProductsRef = collection(db, 'users', userId, 'products');
      const q = query(
        userProductsRef,
        orderBy('name'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];
      const lowerSearchTerm = searchTerm.toLowerCase();

      querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        const data = doc.data();
        const productName = (data?.name || '').toLowerCase();
        if (productName.includes(lowerSearchTerm)) {
          products.push(this.convertProductData(data));
        }
      });

      return products;
    } catch (error: any) {
      console.error('Error searching user products:', error);
      throw new Error(`Failed to search user products: ${error.message}`);
    }
  }
}

