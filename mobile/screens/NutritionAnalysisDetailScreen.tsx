import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DetectedFood, FoodItem } from '../types/product';
import { processImageWithGemini } from '../utils/gemini';
import { NutritionAnalysisService } from '../lib/services/NutritionAnalysisService';
import { ArrowLeft, Camera, RefreshCw, Smile, Trash2 } from 'lucide-react-native';
import FoodNotFound from '../components/FoodNotFound';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from '@react-native-firebase/auth';

export default function NutritionAnalysisDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { imageUri, analysisId } = route.params as { imageUri?: string; analysisId?: string };

  const [detectedFood, setDetectedFood] = useState<DetectedFood | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savedAnalysisId, setSavedAnalysisId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [analysisUserId, setAnalysisUserId] = useState<string | null>(null);
  const [analysisImageUrl, setAnalysisImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUserId(user?.uid || null);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (analysisId) {
      fetchAnalysisById();
    } else if (imageUri) {
      analyzeImage();
    } else {
      setError('No image or analysis ID provided');
      setLoading(false);
    }
  }, []);

  const fetchAnalysisById = async () => {
    if (!analysisId) {
      setError('No analysis ID provided');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const analysis = await NutritionAnalysisService.getAnalysis(analysisId);
      if (!analysis) {
        throw new Error('Analysis not found');
      }
      setDetectedFood(analysis.detectedFood);
      setSavedAnalysisId(analysisId);
      setAnalysisUserId(analysis.userId);
      setAnalysisImageUrl(analysis.imageUrl || null);
    } catch (err: any) {
      console.error('Error fetching analysis:', err);
      setError('Failed to load analysis. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    if (!savedAnalysisId || !currentUserId || !analysisUserId) return;

    // Check if user owns this analysis
    if (analysisUserId !== currentUserId) {
      Alert.alert('Error', 'You do not have permission to delete this analysis.');
      return;
    }

    Alert.alert(
      'Delete Analysis',
      'Are you sure you want to delete this nutrition analysis? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setDeleting(true);
              await NutritionAnalysisService.deleteAnalysis(savedAnalysisId);
              navigation.goBack();
            } catch (err: any) {
              console.error('Error deleting analysis:', err);
              Alert.alert('Error', 'Failed to delete analysis. Please try again.');
            } finally {
              setDeleting(false);
            }
          },
        },
      ]
    );
  };

  const analyzeImage = async () => {
    if (!imageUri) {
      setError('No image provided');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Convert image URI to base64 for Gemini processing
      const response = await fetch(imageUri);
      const blob = await response.blob();

      // Create a File object from the blob
      const file = new File([blob], 'captured-image.jpg', { type: 'image/jpeg' });

      const result = await processImageWithGemini(file);
      const parsedData: DetectedFood = JSON.parse(result);
      setDetectedFood(parsedData);
    } catch (err) {
      console.error('Analysis error:', err);
      setError('Failed to analyze the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatValue = (value: number | string, unit: string = '') => {
    if (typeof value === 'string') return value;
    const numValue = typeof value === 'number' ? value : 0;
    return numValue.toFixed(2) + unit;
  };

  const NutritionCard = ({
    title,
    value,
    unit = '',
    color = '#6366F1'
  }: {
    title: string;
    value: number | string;
    unit?: string;
    color?: string;
  }) => (
    <View style={[styles.nutritionCard, { borderLeftColor: color }]}>
      <Text style={styles.nutritionCardTitle}>{title}</Text>
      <Text style={[styles.nutritionCardValue, { color }]}>
        {formatValue(value || 0, unit)}
      </Text>
    </View>
  );

  const FoodItemCard = ({ item }: { item: FoodItem }) => (
    <View style={styles.foodItemCard}>
      <View style={styles.foodItemHeader}>
        <View style={styles.foodItemInfo}>
          <Text style={styles.foodItemName} numberOfLines={2}>{item.food}</Text>
          <Text style={styles.foodItemQuantity}>
            {formatValue(item.quantity_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.caloriesBadge}>
          <Text style={styles.caloriesText} numberOfLines={1}>
            {formatValue(item.calories || 0, ' cal')}
          </Text>
        </View>
      </View>

      <View style={styles.nutritionGrid}>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>Protein</Text>
          <Text style={[styles.nutritionValue, { color: '#2563EB' }]}>
            {formatValue(item.protein_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>Carbs</Text>
          <Text style={[styles.nutritionValue, { color: '#16A34A' }]}>
            {formatValue(item.carbs_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>Fat</Text>
          <Text style={[styles.nutritionValue, { color: '#CA8A04' }]}>
            {formatValue(item.fat_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>Fiber</Text>
          <Text style={[styles.nutritionValue, { color: '#7C3AED' }]}>
            {formatValue(item.fiber_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>Sugar</Text>
          <Text style={[styles.nutritionValue, { color: '#DB2777' }]}>
            {formatValue(item.sugar_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionLabel}>Sodium</Text>
          <Text style={[styles.nutritionValue, { color: '#DC2626' }]}>
            {formatValue(item.sodium_mg || 0, 'mg')}
          </Text>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Analyzing your food...</Text>
        <Text style={styles.loadingSubtext}>
          This may take a few moments
        </Text>
      </View>
    );
  }

  if (error || !detectedFood) {
    return (
      <FoodNotFound 
        error={error || 'Unable to analyze the food in your image.'}
        onBackPress={() => navigation.navigate('Camera' as never)}
      />
    );
  }

  const hasNoFoodItems = !detectedFood.items || detectedFood.items.length === 0 ||
    (detectedFood.items.length === 1 && detectedFood.items[0].food.toLowerCase() === 'unknown') ||
    (detectedFood.items.length === 1 && detectedFood.items[0].food.toLowerCase().startsWith ('no food'));

  if (hasNoFoodItems) {
    return (
      <View style={styles.noFoodContainer}>
        <View style={styles.noFoodContent}>
          <View style={styles.noFoodIconContainer}>
            <View style={styles.noFoodIconCircle}>
              <Smile size={80} color="#9CA3AF" strokeWidth={1.5} />
            </View>
          </View>
          <Text style={styles.noFoodTitle}>No Food Detected</Text>
          <Text style={styles.noFoodMessage}>
            We couldn't detect any food items in this image.
          </Text>
          <Text style={styles.noFoodSubtext}>
            Please try uploading a clearer image with visible food items.
          </Text>
          <View style={styles.noFoodButtons}>
            <TouchableOpacity
              style={styles.noFoodPrimaryButton}
              onPress={() => navigation.navigate('Camera' as never)}
              activeOpacity={0.8}
            >
              <Text style={styles.noFoodPrimaryButtonText}>Start New Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.noFoodSecondaryButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
            >
              <Text style={styles.noFoodSecondaryButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const canDelete = savedAnalysisId && currentUserId && analysisUserId === currentUserId;

  return (
    <ScrollView style={styles.container}>
      {/* Header with Delete Button */}
      {canDelete && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Food Analysis</Text>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDelete}
            disabled={deleting}
          >
            {deleting ? (
              <ActivityIndicator size="small" color="#DC2626" />
            ) : (
              <Trash2 size={24} color="#DC2626" />
            )}
          </TouchableOpacity>
        </View>
      )}

      {/* Image Preview */}
      {(imageUri || analysisImageUrl) && (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imageUri || analysisImageUrl || '' }} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}

      {/* Total Nutrition Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Total Nutrition</Text>
        <View style={styles.nutritionSummary}>
          <NutritionCard
            title="Calories"
            value={detectedFood.totalCalories}
            unit=" cal"
            color="#F59E0B"
          />
          <NutritionCard
            title="Protein"
            value={detectedFood.totalProtein}
            unit="g"
            color="#2563EB"
          />
          <NutritionCard
            title="Carbs"
            value={detectedFood.totalCarbs}
            unit="g"
            color="#16A34A"
          />
          <NutritionCard
            title="Fat"
            value={detectedFood.totalFat}
            unit="g"
            color="#CA8A04"
          />
          <NutritionCard
            title="Fiber"
            value={detectedFood.totalFiber}
            unit="g"
            color="#7C3AED"
          />
          <NutritionCard
            title="Sugar"
            value={detectedFood.totalSugar}
            unit="g"
            color="#DB2777"
          />
          <NutritionCard
            title="Sodium"
            value={detectedFood.totalSodium}
            unit="mg"
            color="#DC2626"
          />
        </View>
      </View>

      {/* Detected Foods */}
      <View style={styles.foodsContainer}>
        <Text style={styles.foodsTitle}>Detected Foods</Text>
        <Text style={styles.foodsSubtitle}>
          {detectedFood.items.length} item{detectedFood.items.length !== 1 ? 's' : ''} found
        </Text>

        <View style={styles.foodsList}>
          {detectedFood.items.map((item, index) => (
            <FoodItemCard key={index} item={item} />
          ))}
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    // paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    textAlign: 'center',
  },
  deleteButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
  },
  imageContainer: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  nutritionSummary: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  nutritionCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: '45%',
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  nutritionCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  nutritionCardValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  foodsContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  foodsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  foodsSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  foodsList: {
    gap: 16,
  },
  foodItemCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  foodItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  foodItemInfo: {
    flex: 1,
    marginRight: 12,
  },
  foodItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  foodItemQuantity: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  caloriesBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexShrink: 1,
    maxWidth: '40%',
  },
  caloriesText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400E',
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  nutritionItem: {
    alignItems: 'center',
    minWidth: '28%',
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 40,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  loadingSubtext: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  noFoodContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 20,
    minHeight: '60%',
  },
  noFoodContent: {
    maxWidth: 400,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 24,
    padding: 48,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  noFoodIconContainer: {
    marginBottom: 24,
  },
  noFoodIconCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  noFoodTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  noFoodMessage: {
    fontSize: 18,
    color: '#4B5563',
    marginBottom: 8,
    textAlign: 'center',
    lineHeight: 26,
  },
  noFoodSubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 20,
  },
  noFoodButtons: {
    width: '100%',
    gap: 12,
  },
  noFoodPrimaryButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  noFoodPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  noFoodSecondaryButton: {
    width: '100%',
    backgroundColor: '#E5E7EB',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  noFoodSecondaryButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
