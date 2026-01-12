import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BadgeCheck, Check, TriangleAlert, ChartNoAxesColumnIncreasing } from "lucide-react-native";
import { Product } from '../types/product';

interface HealthRecommendationsCardProps {
  product: Product;
}

export default function HealthRecommendationsCard({ product }: HealthRecommendationsCardProps) {
  if (!((product.healthScore.recommendations && product.healthScore.recommendations.length > 0) ||
        (product.healthScore.warnings && product.healthScore.warnings.length > 0) ||
        (product.healthScore.reasons && product.healthScore.reasons.length > 0))) {
    return null;
  }

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

  return (
    <View style={styles.healthRecommendationsCard}>
      <View style={styles.healthRecommendationsHeader}>
        <View style={styles.healthRecommendationsIcon}>
          <BadgeCheck size={24} color={"#2563EB"}/>
        </View>
        <Text style={styles.healthRecommendationsTitle}>Health Recommendations</Text>
      </View>

      {/* Recommendations */}
      {product.healthScore.recommendations && product.healthScore.recommendations.length > 0 && (
        <View style={styles.recommendationsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.recommendationsIcon}>
              <Check size={16} color={"#16A34A"} />
            </View>
            <Text style={styles.sectionHeaderText}>Recommendations</Text>
          </View>
          <View style={styles.recommendationsList}>
            {product.healthScore.recommendations.map((rec, index) => (
              <View key={`rec-${index}`} style={styles.recommendationItem}>
                <Check size={16} color={"#16A34A"} />
                <Text style={styles.recommendationText}>{formatNumbersInText(rec)}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Warnings */}
      {product.healthScore.warnings && product.healthScore.warnings.length > 0 && (
        <View style={styles.warningsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.warningsIcon}>
              <TriangleAlert color={"#DC2626"} size={16}/>
            </View>
            <Text style={[styles.sectionHeaderText, styles.warningsHeaderText]}>Warnings</Text>
          </View>
          <View style={styles.warningsList}>
            {product.healthScore.warnings.map((warning, index) => (
              <View key={`warn-${index}`} style={styles.warningItem}>
                <TriangleAlert color={"#DC2626"} size={16}/>
                <Text style={styles.warningText}>{formatNumbersInText(warning)}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Analysis Details */}
      {product.healthScore.reasons && product.healthScore.reasons.length > 0 && (
        <View style={styles.analysisSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.analysisIcon}>
              <ChartNoAxesColumnIncreasing size={16} color={"#2563EB"}/>
            </View>
            <Text style={styles.sectionHeaderText}>Analysis Details</Text>
          </View>
          <View style={styles.analysisList}>
            {product.healthScore.reasons.map((reason, index) => (
              <View
                key={`reason-${index}`}
                style={[
                  styles.analysisItem,
                  reason.type === 'positive' && styles.analysisPositive,
                  reason.type === 'negative' && styles.analysisNegative,
                  reason.type === 'warning' && styles.analysisWarning,
                ]}
              >
                <View style={styles.analysisItemHeader}>
                  <Text style={styles.analysisCategory}>
                    {reason.category.replace(/([A-Z])/g, ' $1').trim()}:
                  </Text>
                </View>
                <Text style={styles.analysisMessage}>{formatNumbersInText(reason.message)}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  healthRecommendationsCard: {
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
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  healthRecommendationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  healthRecommendationsIcon: {
    backgroundColor: '#DBEAFE',
    borderRadius: 50,
    padding: 8,
  },
  healthRecommendationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  recommendationsSection: {
    marginBottom: 24,
  },
  warningsSection: {
    marginBottom: 24,
  },
  analysisSection: {
    marginBottom: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  warningsHeaderText: {
    color: '#DC2626',
  },
  recommendationsIcon: {
    backgroundColor: '#DCFCE7',
    borderRadius: 50,
    padding: 4,
  },
  warningsIcon: {
    backgroundColor: '#FEE2E2',
    borderRadius: 50,
    padding: 4,
  },
  analysisIcon: {
    backgroundColor: '#DBEAFE',
    borderRadius: 50,
    padding: 4,
  },
  recommendationsList: {
    gap: 12,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  recommendationText: {
    fontSize: 14,
    color: '#1F2937',
    flex: 1,
    lineHeight: 20,
  },
  warningsList: {
    gap: 12,
  },
  warningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  warningText: {
    fontSize: 14,
    color: '#1F2937',
    flex: 1,
    lineHeight: 20,
  },
  analysisList: {
    gap: 12,
  },
  analysisItem: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  analysisPositive: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },
  analysisNegative: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },
  analysisWarning: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
  },
  analysisItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  analysisCategory: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  analysisMessage: {
    fontSize: 12,
    opacity: 0.9,
    lineHeight: 16,
  },
});
