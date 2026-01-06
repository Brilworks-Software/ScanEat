import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from '../../shared/types/product';

interface NutritionCardProps {
  nutrition: Product['nutrition'];
}

export default function NutritionCard({ nutrition }: NutritionCardProps) {
  if (!nutrition) return null;

  return (
    <View style={styles.nutritionCard}>
      <View style={styles.nutritionHeader}>
        <Text style={styles.nutritionTitle}>Nutrition Facts</Text>
        <Text style={styles.nutritionSubtitle}>Per 100g</Text>
      </View>
      <View style={styles.nutritionGrid}>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.energyBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.energyText]}>Energy</Text>
            <Text style={[styles.nutritionItemValue, styles.energyText]}>{nutrition.energy || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.energyText]}>kcal</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.fatBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.fatText]}>Fat</Text>
            <Text style={[styles.nutritionItemValue, styles.fatText]}>{nutrition.fat || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.fatText]}>grams</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.carbsBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.carbsText]}>Carbs</Text>
            <Text style={[styles.nutritionItemValue, styles.carbsText]}>{nutrition.carbohydrates || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.carbsText]}>grams</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.proteinBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.proteinText]}>Protein</Text>
            <Text style={[styles.nutritionItemValue, styles.proteinText]}>{nutrition.proteins || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.proteinText]}>grams</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.sugarsBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.sugarsText]}>Sugars</Text>
            <Text style={[styles.nutritionItemValue, styles.sugarsText]}>{nutrition.sugars || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.sugarsText]}>grams</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.saltBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.saltText]}>Salt</Text>
            <Text style={[styles.nutritionItemValue, styles.saltText]}>{nutrition.salt || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.saltText]}>grams</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.fiberBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.fiberText]}>Fiber</Text>
            <Text style={[styles.nutritionItemValue, styles.fiberText]}>{nutrition.fiber || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.fiberText]}>grams</Text>
          </View>
        </View>
        <View style={styles.nutritionItemCard}>
          <View style={[styles.nutritionItemBackground, styles.saturatedFatBackground]}>
            <Text style={[styles.nutritionItemLabel, styles.saturatedFatText]}>Saturated Fat</Text>
            <Text style={[styles.nutritionItemValue, styles.saturatedFatText]}>{nutrition.saturatedFat || 0}</Text>
            <Text style={[styles.nutritionItemUnit, styles.saturatedFatText]}>grams</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nutritionCard: {
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
  nutritionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  nutritionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  nutritionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nutritionItemCard: {
    width: '48%',
    marginBottom: 12,
  },
  nutritionItemBackground: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  nutritionItemLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  nutritionItemValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  nutritionItemUnit: {
    fontSize: 12,
    opacity: 0.8,
  },
  // Nutrition item background colors
  energyBackground: {
    backgroundColor: '#FFF7ED',
    borderColor: '#FED7AA',
  },
  fatBackground: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
  },
  carbsBackground: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
  },
  proteinBackground: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },
  sugarsBackground: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },
  saltBackground: {
    backgroundColor: '#F3E8FF',
    borderColor: '#E9D5FF',
  },
  fiberBackground: {
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
  },
  saturatedFatBackground: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE047',
  },
  // Nutrition item text colors
  energyText: {
    color: '#EA580C',
  },
  fatText: {
    color: '#CA8A04',
  },
  carbsText: {
    color: '#1D4ED8',
  },
  proteinText: {
    color: '#166534',
  },
  sugarsText: {
    color: '#DC2626',
  },
  saltText: {
    color: '#7C3AED',
  },
  fiberText: {
    color: '#047857',
  },
  saturatedFatText: {
    color: '#D97706',
  },
});
