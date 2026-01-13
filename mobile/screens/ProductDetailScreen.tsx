import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TriangleAlert } from "lucide-react-native";
import { ProductService } from '../lib/services/ProductService';
import { Product } from '../types/product';
import ProductHeader from '../components/ProductHeader';
import HealthScoreCard from '../components/HealthScoreCard';
import HealthRecommendationsCard from '../components/HealthRecommendationsCard';
import NutritionCard from '../components/NutritionCard';
import IngredientCard from '../components/IngredientCard';
import AdditiveCard from '../components/AdditiveCard';
import AllergenCard from '../components/AllergenCard';
import FoodNotFound from '../components/FoodNotFound';
import { analyzeProductHealth } from '../lib/healthAnalysis';


export default function ProductDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { barcode } = route.params as { barcode: string };

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIngredients, setExpandedIngredients] = useState<Set<number>>(new Set());
  const [expandedAllergens, setExpandedAllergens] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch product directly from OpenFoodFacts API
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timed out')), 30000)
        );
        
        const productData = await Promise.race([
          ProductService.getProduct(barcode),
          timeoutPromise
        ]) as any;
        
        if (!productData) {
          throw new Error('Product not found in OpenFoodFacts database.');
        }

        // Analyze health directly in the browser
        const healthScore = analyzeProductHealth(productData);

        // Combine data
        const fullProduct: Product = {
          ...productData,
          healthScore
        };

        setProduct(fullProduct);
      } catch (err: any) {
        console.error('Error fetching product:', err);
        setError(err.message || 'Failed to load product');
        Alert.alert('Error', err.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (barcode) {
      fetchProduct();
    }
  }, [barcode]);

  const toggleIngredient = (index: number) => {
    const newExpanded = new Set(expandedIngredients);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedIngredients(newExpanded);
  };

  const toggleAllergenDetails = (index: number) => {
    const newExpanded = new Set(expandedAllergens);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedAllergens(newExpanded);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading product information...</Text>
      </View>
    );
  }

  if (error || !product) {
    return <FoodNotFound error={error} />;
  }

  return (
    <ScrollView style={styles.container} >
      {/* Product Header */}
      <ProductHeader product={product} />

      {/* Health Score */}
      <HealthScoreCard product={product} />

      {/* Health Recommendations */}
      <HealthRecommendationsCard product={product} />

      {/* Nutrition */}
      {product.nutrition && <NutritionCard nutrition={product.nutrition} />}


      {/* Ingredients */}
      {product.ingredients && product.ingredients.length > 0 && (
        <View style={styles.section}>
          <View style={styles.ingredientsHeader}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <View style={styles.ingredientsCount}>
              <Text style={styles.ingredientsCountText}>{product.ingredients.length} ingredients</Text>
            </View>
          </View>
          <Text style={styles.ingredientsDescription}>
            Ingredients are listed in order of quantity (highest first). Tap any ingredient for detailed information.
          </Text>
          <View style={styles.ingredientsList}>
            {product.ingredients.map((ingredient, index) => (
              <IngredientCard
                key={index}
                ingredient={ingredient}
                isExpanded={expandedIngredients.has(index)}
                onToggle={() => toggleIngredient(index)}
              />
            ))}
          </View>
        </View>
      )}

      {/* Additives */}
      {product.additives && product.additives.length > 0 && (
        <View style={styles.additivesCard}>
          <View style={styles.additivesHeader}>
            <View style={styles.additivesIcon}>
              <TriangleAlert size={24} color="#F59E0B"/>
            </View>
            <Text style={styles.additivesTitle}>Additives</Text>
            <View style={styles.additivesCount}>
              <Text style={styles.additivesCountText}>{product.additives.length} found</Text>
            </View>
          </View>
          <View style={styles.additivesList}>
            {product.additives.map((additive, index) => (
              <AdditiveCard key={index} additive={additive} />
            ))}
          </View>

          {/* General Additive Warning */}
          <View style={styles.additiveWarning}>
            <Text style={styles.warningText}>
              <Text style={styles.warningStrong}>Note:</Text> Many additives are generally safe, but some may cause reactions in sensitive individuals.
              Consider limiting processed foods with multiple additives for better health.
            </Text>
          </View>
        </View>
      )}

      {/* Allergens */}
      {product.allergens && product.allergens.length > 0 && (
        <View style={styles.allergensCard}>
          <View style={styles.allergensHeader}>
            <View style={styles.allergensIcon}>
              <TriangleAlert size={24} color="#DC2626"/>
            </View>
            <Text style={styles.allergensTitle}>Allergens</Text>
          </View>
          <View style={styles.allergensList}>
            {product.allergens.map((allergen, index) => (
              <AllergenCard
                key={index}
                allergen={allergen}
                isExpanded={expandedAllergens.has(index)}
                onToggle={() => toggleAllergenDetails(index)}
              />
            ))}
          </View>
        </View>
      )}
      <View style={{height:20}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingBottom: 20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  loadingText: {
    marginTop: 10,
    color: '#6B7280',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 16,
    borderRadius:16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },
  ingredientsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ingredientsCount: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ingredientsCountText: {
    fontSize: 12,
    color: '#374151',
  },
  ingredientsDescription: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 18,
  },
  ingredientsList: {
    gap: 8,
  },
  additivesCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  additivesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  additivesIcon: {
    backgroundColor: '#FEF3C7',
    borderRadius: 50,
    padding: 8,
  },
  additivesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  additivesCount: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  additivesCountText: {
    fontSize: 12,
    color: '#374151',
  },
  additivesList: {
    gap: 12,
  },
  additiveWarning: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  warningText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  warningStrong: {
    fontWeight: 'bold',
  },
  allergensCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  allergensHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  allergensIcon: {
    backgroundColor: '#FEF2F2',
    borderRadius: 50,
    padding: 8,
  },
  allergensTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  allergensList: {
    gap: 12,
  },
});

