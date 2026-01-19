import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronDown, AlertTriangle, CheckCircle, Heart } from "lucide-react-native";
import { getIngredientInfo, getIngredientConcernColor, getIngredientConcernText, type IngredientInfo } from '../lib/ingredients';

interface Ingredient {
  name: string;
  rank: number;
  vegan?: boolean;
  vegetarian?: boolean;
  allergen?: boolean;
  additive?: boolean;
}

interface IngredientCardProps {
  ingredient: Ingredient;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function IngredientCard({ ingredient, isExpanded, onToggle }: IngredientCardProps) {
  const info = getIngredientInfo(ingredient.name);
  const concern = info?.concern || 'moderate';
  const concernColor = getConcernColor(concern);
  const concernText = getIngredientConcernText(concern);

  // Helper function to format numbers in text strings to 2 decimal places
  const formatNumbersInText = (text: string): string => {
    // Match decimal numbers (e.g., 25.5, 10.123, 0.3)
    // Format them to 2 decimal places
    return text.replace(/(\d+\.\d+)/g, (match, p1, offset, fullString) => {
      // Check if this number is part of an additive code (E followed by numbers)
      const beforeMatch = fullString.substring(Math.max(0, offset - 2), offset);
      if (beforeMatch.match(/E\d*$/)) {
        return match; // Don't format if it's part of an additive code like E102
      }
      const num = parseFloat(match);
      if (!isNaN(num)) {
        return num.toFixed(2);
      }
      return match;
    });
  };

  const getIngredientColor = (ingredient: any, info: IngredientInfo | null) => {
    if (ingredient.allergen || info?.dietaryInfo?.allergen) {
      return { backgroundColor: '#FEF2F2', borderColor: '#FECACA' };
    }
    if (ingredient.additive) {
      return { backgroundColor: '#FFFBEB', borderColor: '#FDE68A' };
    }
    if (info?.concern === 'very_high' || info?.concern === 'high') {
      return { backgroundColor: '#FFF7ED', borderColor: '#FED7AA' };
    }
    if (info?.concern === 'moderate') {
      return { backgroundColor: '#FFFBEB', borderColor: '#FDE68A' };
    }
    return { backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' };
  };

  return (
    <View
      style={[styles.ingredientCard, getIngredientColor(ingredient, info), isExpanded && styles.ingredientCardExpanded]}
    >
      {/* Ingredient Header - Touchable */}
      <TouchableOpacity
        style={styles.ingredientHeaderTouchable}
        onPress={onToggle}
      >
        <View style={styles.ingredientHeaderContent}>
          {/* Rank Badge */}
          {/* <View style={styles.ingredientRankBadge}>
            <Text style={styles.ingredientRankText}>{ingredient.rank}</Text>
          </View> */}

          {/* Ingredient Name and Tags */}
          <View style={styles.ingredientMainContent}>
            <View style={styles.ingredientNameRow}>
              <View style={styles.nameBadgeRow}>

              <Text style={styles.ingredientName}>{ingredient.name}</Text>
              {info && (
                <View style={[styles.concernBadge, { backgroundColor: concernColor.backgroundColor }]}>
                  <Text style={[styles.concernBadgeText, { color: concernColor.textColor }]}>{concernText}</Text>
                </View>
              )}
              </View>
              <View style={[styles.expandIcon, isExpanded && styles.expandIconRotated]}>
                <ChevronDown size={16} color="#6B7280" />
              </View>
            </View>

            {/* Dietary Tags */}
            <View style={styles.dietaryTags}>
              {ingredient.vegan && (
                <View style={styles.tagVegan}>
                  <Text style={styles.tagText}>✓ Vegan</Text>
                </View>
              )}
              {ingredient.vegetarian && !ingredient.vegan && (
                <View style={styles.tagVegetarian}>
                  <Text style={styles.tagText}>✓ Vegetarian</Text>
                </View>
              )}
              {(ingredient.allergen || info?.dietaryInfo?.allergen) && (
                <View style={styles.tagAllergen}>
                  <Text style={styles.tagText}>⚠ Allergen</Text>
                </View>
              )}
              {info?.dietaryInfo?.glutenFree === false && (
                <View style={styles.tagGluten}>
                  <Text style={styles.tagText}>Contains Gluten</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Expanded Details */}
      {isExpanded && info && (
        <View style={styles.expandedContent}>
          <View style={styles.expandedContentInner}>
            {/* Description */}
            <View style={styles.sectionItem}>
              <Text style={styles.categoryText}>{info.category.toUpperCase()}</Text>
              <Text style={styles.descriptionText}>{formatNumbersInText(info.description)}</Text>
            </View>

            {/* Why Consider */}
            {info.whyConsider && info.whyConsider.length > 0 && (
              <View style={styles.sectionItem}>
                <View style={styles.ingredientSectionHeader}>
                  <AlertTriangle size={16} color="#F97316" />
                  <Text style={styles.sectionTitleOrange}>Things to Consider</Text>
                </View>
                <View style={styles.listContainer}>
                  {info.whyConsider.map((reason, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text style={styles.listBulletOrange}>•</Text>
                      <Text style={styles.listText}>{formatNumbersInText(reason)}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Health Effects */}
            {info.healthEffects && info.healthEffects.length > 0 && (
              <View style={styles.sectionItem}>
                <View style={styles.ingredientSectionHeader}>
                  <CheckCircle size={16} color="#EF4444" />
                  <Text style={styles.sectionTitleRed}>Health Effects</Text>
                </View>
                <View style={styles.listContainer}>
                  {info.healthEffects.map((effect, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text style={styles.listBulletRed}>•</Text>
                      <Text style={styles.listText}>{formatNumbersInText(effect)}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Benefits */}
            {info.benefits && info.benefits.length > 0 && (
              <View style={styles.sectionItem}>
                <View style={styles.ingredientSectionHeader}>
                  <Heart size={16} color="#10B981" />
                  <Text style={styles.sectionTitleGreen}>Benefits</Text>
                </View>
                <View style={styles.listContainer}>
                  {info.benefits.map((benefit, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text style={styles.listBulletGreen}>✓</Text>
                      <Text style={styles.listText}>{formatNumbersInText(benefit)}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Allergen Info */}
            {info.dietaryInfo?.allergen && info.dietaryInfo.allergen.length > 0 && (
              <View style={styles.allergenWarning}>
                <Text style={styles.allergenWarningTitle}>⚠ Contains Allergens:</Text>
                <Text style={styles.allergenWarningText}>
                  {info.dietaryInfo.allergen.join(', ')}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* No Info Available */}
      {isExpanded && !info && (
        <View style={styles.noInfoContent}>
          <Text style={styles.noInfoText}>
            Limited information available for this ingredient. Consider researching before consuming.
          </Text>
        </View>
      )}
    </View>
  );
}

const getConcernColor = (concern: IngredientInfo['concern']) => {
  switch (concern) {
    case 'very_high':
      return { backgroundColor: '#EF4444', textColor: '#FFFFFF' };
    case 'high':
      return { backgroundColor: '#F97316', textColor: '#FFFFFF' };
    case 'moderate':
      return { backgroundColor: '#F59E0B', textColor: '#FFFFFF' };
    case 'low':
      return { backgroundColor: '#10B981', textColor: '#FFFFFF' };
    default:
      return { backgroundColor: '#6B7280', textColor: '#FFFFFF' };
  }
};

const styles = StyleSheet.create({
  ingredientCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  ingredientCardExpanded: {
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  ingredientHeaderTouchable: {
    padding: 16,
  },
  ingredientHeaderContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ingredientRankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  ingredientRankText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
  },
  ingredientMainContent: {
    flex: 1,
    minWidth: 0,
  },
  ingredientNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 8,
    marginBottom: 8,
    justifyContent: "space-between"
  },
  nameBadgeRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    minWidth: 0,
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  concernBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    maxWidth: 140,
    overflow: 'hidden',
  },
  concernBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: "#fff"
  },
  dietaryTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tagVegan: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagVegetarian: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 10,
    color: '#065F46',
    fontWeight: '600',
  },
  tagAllergen: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagGluten: {
    backgroundColor: '#FED7AA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  expandIcon: {
    marginLeft: 8,
    flexShrink: 0,
    alignSelf: 'flex-start',
  },
  expandIconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  expandedContent: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  expandedContentInner: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionItem: {
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  ingredientSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionTitleOrange: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EA580C',
  },
  sectionTitleRed: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DC2626',
  },
  sectionTitleGreen: {
    fontSize: 14,
    fontWeight: '700',
    color: '#059669',
  },
  listContainer: {
    gap: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  listBulletOrange: {
    color: '#EA580C',
    fontSize: 14,
    marginTop: 2,
  },
  listBulletRed: {
    color: '#DC2626',
    fontSize: 14,
    marginTop: 2,
  },
  listBulletGreen: {
    color: '#059669',
    fontSize: 14,
    marginTop: 2,
  },
  listText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    flex: 1,
  },
  allergenWarning: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  allergenWarningTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 4,
  },
  allergenWarningText: {
    fontSize: 12,
    color: '#991B1B',
  },
  noInfoContent: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
  },
  noInfoText: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
  },
});
