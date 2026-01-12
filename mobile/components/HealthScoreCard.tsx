import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from '../types/product';

interface HealthScoreCardProps {
  product: Product;
}

export default function HealthScoreCard({ product }: HealthScoreCardProps) {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'excellent':
        return '#10B981';
      case 'good':
        return '#34D399';
      case 'moderate':
        return '#FBBF24';
      case 'poor':
        return '#F97316';
      case 'avoid':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getNutriScoreColor = (nutriScore: string) => {
    switch (nutriScore.toUpperCase()) {
      case 'A':
        return '#16A34A';
      case 'B':
        return '#22C55E';
      case 'C':
        return '#FBBF24';
      case 'D':
        return '#F97316';
      case 'E':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getGradeText = (grade: string) => {
    switch (grade) {
      case 'excellent':
        return 'Excellent';
      case 'good':
        return 'Good';
      case 'moderate':
        return 'Moderate';
      case 'poor':
        return 'Poor';
      case 'avoid':
        return 'Avoid';
      default:
        return 'Unknown';
    }
  };

  return (
    <View style={styles.healthScoreCard}>
      <View style={styles.healthScoreHeader}>
        <Text style={styles.healthScoreTitle}>Health Analysis</Text>
        <View style={styles.healthScoreSubtitle}>
          <View style={styles.infoIcon}>
            <Text style={styles.infoIconText}>ℹ</Text>
          </View>
          <Text style={styles.subtitleText}>Score out of 100</Text>
        </View>
      </View>

      <View style={styles.healthScoreContent}>
        {/* Health Score Circle with Ring */}
        <View style={styles.scoreCircleContainer}>
          <View
            style={[
              styles.scoreCircle,
              { backgroundColor: getGradeColor(product.healthScore.grade) },
            ]}
          >
            <Text style={styles.scoreText}>
              {typeof product.healthScore.score === 'number' 
                ? product.healthScore.score.toFixed(0) 
                : product.healthScore.score}
            </Text>
          </View>
          {/* Progress Ring */}
          <View style={styles.progressRing}>
            {/* We'll use a simple border approach for the ring */}
          </View>
          {/* NutriScore Badge */}
          {product.healthScore.nutriScore && product.healthScore.nutriScore !== "UNKNOWN" && (
            <View style={[styles.nutriScoreBadge, { backgroundColor: getNutriScoreColor(product.healthScore.nutriScore) }]}>
              <Text style={styles.nutriScoreText}>
                {product.healthScore.nutriScore}
              </Text>
            </View>
          )}
        </View>

        {/* Grade Badge */}
        <View style={[styles.gradeBadge, { backgroundColor: getGradeColor(product.healthScore.grade) }]}>
          <Text style={styles.gradeBadgeText}>{getGradeText(product.healthScore.grade)}</Text>
        </View>

        {/* NOVA Group */}
        {product.healthScore.novaGroup && (
          <View style={styles.novaGroupContainer}>
            <View style={styles.novaBadge}>
              <Text style={styles.novaLabel}>NOVA</Text>
              <Text style={styles.novaGroupText}>Group {product.healthScore.novaGroup}</Text>
            </View>
          </View>
        )}
      </View>

      {/* Score Explanation */}
      <View style={styles.scoreExplanation}>
        <Text style={styles.explanationText}>
          This score is calculated based on nutrition facts, additives, processing level, and ingredient quality
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  healthScoreCard: {
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
  healthScoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  healthScoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  healthScoreSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIconText: {
    fontSize: 10,
    color: '#2563EB',
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 12,
    color: '#6B7280',
  },
  healthScoreContent: {
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreCircleContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  progressRing: {
    position: 'absolute',
    top: -8,
    left: -8,
    width: 136,
    height: 136,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nutriScoreBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#fff',
  },
  nutriScoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  gradeBadge: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  gradeBadgeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  novaGroupContainer: {
    marginTop: 16,
  },
  novaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
  },
  novaLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  novaGroupText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  scoreExplanation: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  explanationText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
});
