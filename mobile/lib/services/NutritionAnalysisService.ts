import {
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    Timestamp,
    FirebaseFirestoreTypes,
    deleteDoc
  } from '@react-native-firebase/firestore';
  import { db } from '../firebase';
  import { DetectedFood, FoodItem } from '../../types/product';
  
  /**
   * Nutrition analysis document structure in Firestore
   */
  export interface NutritionAnalysis {
    id: string;
    userId: string;
    imageUrl?: string;
    imageFileName?: string;
    detectedFood: DetectedFood;
    analysisDate: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  
  /**
   * NutritionAnalysisService handles nutrition analysis operations in Firestore
   */
  export class NutritionAnalysisService {
    private static readonly COLLECTION_NAME = 'nutrition-analysis';
  
    /**
     * Saves a nutrition analysis result to Firestore
     * @param userId - User ID who performed the analysis
     * @param detectedFood - The detected food data from analysis
     * @param imageUrl - Optional image URL of the analyzed food
     * @param imageFileName - Optional original filename
     * @returns Promise<NutritionAnalysis>
     */
    static async saveAnalysis(
      userId: string,
      detectedFood: DetectedFood,
      imageUrl?: string,
      imageFileName?: string
    ): Promise<NutritionAnalysis> {
      try {
        const analysisData = {
          userId,
          imageUrl,
          imageFileName,
          detectedFood,
          analysisDate: serverTimestamp(),
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };
  
        const docRef = await addDoc(collection(db, this.COLLECTION_NAME), analysisData);
  
        // Return the created analysis with the generated ID
        return {
          id: docRef.id,
          userId,
          imageUrl,
          imageFileName,
          detectedFood,
          analysisDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      } catch (error: any) {
        console.error('Error saving nutrition analysis:', error);
        throw new Error(`Failed to save nutrition analysis: ${error.message}`);
      }
    }
  
    /**
     * Gets a specific nutrition analysis by ID
     * @param analysisId - Analysis document ID
     * @returns Promise<NutritionAnalysis | null>
     */
    static async getAnalysis(analysisId: string): Promise<NutritionAnalysis | null> {
      try {
        const docRef = doc(db, this.COLLECTION_NAME, analysisId);
        const docSnap = await getDoc(docRef);
  
        if (!docSnap.exists()) {
          return null;
        }

        const data = docSnap.data();

        if (!data) {
          return null;
        }

        // Convert Firestore Timestamp fields to JS Date objects where necessary
        const analysis: NutritionAnalysis = {
          id: docSnap.id,
          userId: data.userId || '',
          imageUrl: data.imageUrl || '',
          imageFileName: data.imageFileName || '',
          detectedFood: data.detectedFood || {items: [], totalCalories: 0},
          analysisDate: data.analysisDate?.toDate ? data.analysisDate.toDate() : new Date(),
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(),
          updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(),
        };

        return analysis;
      } catch (error: any) {
        console.error('Error getting nutrition analysis:', error);
        throw new Error(`Failed to get nutrition analysis: ${error.message}`);
      }
    }
  
    /**
     * Gets all nutrition analyses for a specific user
     * @param userId - User ID
     * @param limitCount - Optional limit for number of results (default: 50)
     * @returns Promise<NutritionAnalysis[]>
     */
    static async getUserAnalyses(
      userId: string,
      limitCount: number = 50
    ): Promise<NutritionAnalysis[]> {
      try {
        const q = query(
          collection(db, this.COLLECTION_NAME),
          where('userId', '==', userId),
          orderBy('analysisDate', 'desc'),
          limit(limitCount)
        );
  
        const querySnapshot = await getDocs(q);
        const analyses: NutritionAnalysis[] = [];
  
        querySnapshot.docs.map((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
          const data = doc.data();
          analyses.push({
            id: doc.id,
            userId: data?.userId || '',
            imageUrl: data?.imageUrl || '',
            imageFileName: data?.imageFileName || '',
            detectedFood: data?.detectedFood || {items: [], totalCalories: 0},
            analysisDate: data?.analysisDate?.toDate() || new Date() as any,
            createdAt: data?.createdAt?.toDate() || new Date() as any,
            updatedAt: data?.updatedAt?.toDate() || new Date() as any,
          });
        });

        return analyses;
      } catch (error: any) {
        console.error('Error getting user nutrition analyses:', error);
        throw new Error(`Failed to get user nutrition analyses: ${error.message}`);
      }
    }
  
    /**
     * Gets recent nutrition analyses for a user (last N days)
     * @param userId - User ID
     * @param days - Number of days to look back (default: 7)
     * @returns Promise<NutritionAnalysis[]>
     */
    static async getRecentAnalyses(
      userId: string,
      days: number = 7
    ): Promise<NutritionAnalysis[]> {
      try {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
  
        const q = query(
          collection(db, this.COLLECTION_NAME),
          where('userId', '==', userId),
          where('analysisDate', '>=', Timestamp.fromDate(startDate)),
          orderBy('analysisDate', 'desc')
        );
  
        const querySnapshot = await getDocs(q);
        const analyses: NutritionAnalysis[] = [];
  
        querySnapshot.docs.map((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
          const data = doc.data();
          analyses.push({
            id: doc.id,
            userId: data?.userId || '',
            imageUrl: data?.imageUrl || '',
            imageFileName: data?.imageFileName || '',
            detectedFood: data?.detectedFood || {items: [], totalCalories: 0},
            analysisDate: data?.analysisDate?.toDate() || new Date(),
            createdAt: data?.createdAt?.toDate() || new Date() as any,
            updatedAt: data?.updatedAt?.toDate() || new Date() as any,
          });
        });
  
        return analyses;
      } catch (error: any) {
        console.error('Error getting recent nutrition analyses:', error);
        throw new Error(`Failed to get recent nutrition analyses: ${error.message}`);
      }
    }
  
    /**
     * Updates an existing nutrition analysis
     * @param analysisId - Analysis document ID
     * @param updates - Partial updates to apply
     * @returns Promise<void>
     */
    static async updateAnalysis(
      analysisId: string,
      updates: Partial<Pick<NutritionAnalysis, 'detectedFood' | 'imageUrl'>>
    ): Promise<void> {
      try {
        const docRef = doc(db, this.COLLECTION_NAME, analysisId);
        await updateDoc(docRef, {
          ...updates,
          updatedAt: serverTimestamp(),
        });
      } catch (error: any) {
        console.error('Error updating nutrition analysis:', error);
        throw new Error(`Failed to update nutrition analysis: ${error.message}`);
      }
    }
  
    /**
     * Deletes a nutrition analysis
     * @param analysisId - Analysis document ID
     * @returns Promise<void>
     */
    static async deleteAnalysis(analysisId: string): Promise<void> {
      try {
        console.log('Deleting nutrition analysis:', analysisId);
        const docRef = doc(db, this.COLLECTION_NAME, analysisId);
        await deleteDoc(docRef);
      } catch (error: any) {
        console.error('Error deleting nutrition analysis:', error);
        throw new Error(`Failed to delete nutrition analysis: ${error.message}`);
      }
    }
  
    /**
     * Gets nutrition analysis statistics for a user
     * @param userId - User ID
     * @param days - Number of days to analyze (default: 30)
     * @returns Promise<NutritionStats>
     */
    static async getNutritionStats(
      userId: string,
      days: number = 30
    ): Promise<NutritionStats> {
      try {
        const analyses = await this.getRecentAnalyses(userId, days);
  
        const stats: NutritionStats = {
          totalAnalyses: analyses.length,
          averageCaloriesPerDay: 0,
          totalCaloriesThisPeriod: 0,
          mostAnalyzedFoods: [],
          analysisFrequency: 'daily', // Will be calculated
          periodDays: days,
        };
  
        if (analyses.length === 0) {
          return stats;
        }
  
        // Calculate totals
        let totalCalories = 0;
        const foodCount: Record<string, number> = {};
  
        analyses.forEach((analysis) => {
          totalCalories += analysis.detectedFood.totalCalories;
  
          // Count food items
          analysis.detectedFood.items.forEach((item) => {
            foodCount[item.food] = (foodCount[item.food] || 0) + 1;
          });
        });
  
        stats.totalCaloriesThisPeriod = totalCalories;
        stats.averageCaloriesPerDay = Math.round(totalCalories / days);
  
        // Get most analyzed foods
        stats.mostAnalyzedFoods = Object.entries(foodCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([food, count]) => ({ food, count }));
  
        // Calculate analysis frequency
        const uniqueDays = new Set(
          analyses.map(analysis =>
            analysis.analysisDate.toDateString()
          )
        ).size;
  
        const avgAnalysesPerDay = analyses.length / days;
        if (avgAnalysesPerDay >= 2) {
          stats.analysisFrequency = 'multiple_daily';
        } else if (avgAnalysesPerDay >= 0.5) {
          stats.analysisFrequency = 'daily';
        } else if (avgAnalysesPerDay >= 0.1) {
          stats.analysisFrequency = 'weekly';
        } else {
          stats.analysisFrequency = 'occasional';
        }
  
        return stats;
      } catch (error: any) {
        console.error('Error getting nutrition stats:', error);
        throw new Error(`Failed to get nutrition stats: ${error.message}`);
      }
    }
  }
  
  /**
   * Nutrition statistics interface
   */
  export interface NutritionStats {
    totalAnalyses: number;
    averageCaloriesPerDay: number;
    totalCaloriesThisPeriod: number;
    mostAnalyzedFoods: Array<{ food: string; count: number }>;
    analysisFrequency: 'occasional' | 'weekly' | 'daily' | 'multiple_daily';
    periodDays: number;
  }
  