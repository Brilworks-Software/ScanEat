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
import { ArrowLeft, Camera, RefreshCw } from 'lucide-react-native';

export default function NutritionAnalysisDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { imageUri, analysisId } = route.params as { imageUri?: string; analysisId?: string };

  const [detectedFood, setDetectedFood] = useState<DetectedFood | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savedAnalysisId, setSavedAnalysisId] = useState<string | null>(null);

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
    } catch (err: any) {
      console.error('Error fetching analysis:', err);
      setError('Failed to load analysis. Please try again.');
    } finally {
      setLoading(false);
    }
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
    if (value === 0) return '0';
    return (value || 0).toFixed(1) + unit;
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
        <View>
          <Text style={styles.foodItemName}>{item.food}</Text>
          <Text style={styles.foodItemQuantity}>
            {formatValue(item.quantity_grams || 0, 'g')}
          </Text>
        </View>
        <View style={styles.caloriesBadge}>
          <Text style={styles.caloriesText}>
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
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Analysis Failed</Text>
        <Text style={styles.errorText}>
          {error || 'Unable to analyze the food in your image.'}
        </Text>

        <View style={styles.errorActions}>
          {imageUri && (
            <TouchableOpacity
              style={styles.retryButton}
              onPress={analyzeImage}
            >
              <RefreshCw size={20} color="#6366F1" />
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.newPhotoButton}
            onPress={() => navigation.navigate('Camera' as never)}
          >
            <Camera size={20} color="#fff" />
            <Text style={styles.newPhotoButtonText}>Take New Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#6366F1" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Food Analysis</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Image Preview */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>

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
    paddingTop: 60,
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
  foodItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 40,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  errorText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  errorActions: {
    width: '100%',
    gap: 12,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
  },
  newPhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  newPhotoButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
