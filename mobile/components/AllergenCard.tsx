import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronDown } from "lucide-react-native";
import { getAllergenInfo, getAllergenSeverityColor, type AllergenInfo } from '../lib/allergens';

interface AllergenCardProps {
  allergen: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function AllergenCard({ allergen, isExpanded, onToggle }: AllergenCardProps) {
  const cleanAllergen = allergen.replace('en:', '').replace(/_/g, ' ');
  const allergenInfo = getAllergenInfo(cleanAllergen);

  if (!allergenInfo) {
    // Fallback for allergens not in database
    return (
      <View style={styles.allergenFallback}>
        <Text style={styles.allergenWarningSymbol}>⚠️</Text>
        <Text style={styles.allergenFallbackText}>{cleanAllergen}</Text>
      </View>
    );
  }

  const severityColor = getAllergenSeverityColor(allergenInfo.severity);
  const severityBorderColor = severityColor.includes('red') ? '#EF4444' :
                            severityColor.includes('orange') ? '#F97316' :
                            severityColor.includes('yellow') ? '#F59E0B' :
                            severityColor.includes('blue') ? '#3B82F6' : '#6B7280';

  return (
    <View style={[styles.allergenCard, { borderLeftColor: severityBorderColor }]}>
      {/* Header */}
      <TouchableOpacity
        style={styles.allergenHeader}
        onPress={onToggle}
      >
        <View style={styles.allergenHeaderContent}>
          <View style={styles.allergenIcon}>
            <Text style={styles.allergenWarningSymbol}>⚠️</Text>
          </View>
          <View style={styles.allergenMainContent}>
            <Text style={styles.allergenName}>{allergenInfo.name}</Text>
            <Text style={styles.allergenSeverity}>
              Severity: {allergenInfo.severity.replace('_', ' ')} • {allergenInfo.prevalence}
            </Text>
          </View>
        </View>
        <View style={[styles.expandIcon, isExpanded && styles.expandIconRotated]}>
          <ChevronDown size={16} color="#6B7280" />
        </View>
      </TouchableOpacity>

      {/* Expanded Details */}
      {isExpanded && (
        <View style={styles.expandedAllergenContent}>
          <View style={styles.expandedAllergenContentInner}>
            {/* Description */}
            <View style={styles.allergenSection}>
              <Text style={styles.allergenSectionTitle}>Description</Text>
              <Text style={styles.allergenSectionText}>{allergenInfo.description}</Text>
            </View>

            {/* Symptoms */}
            <View style={styles.allergenSection}>
              <Text style={styles.allergenSectionTitle}>Symptoms</Text>
              <View style={styles.allergenList}>
                {allergenInfo.symptoms.map((symptom, symptomIndex) => (
                  <View key={symptomIndex} style={styles.allergenListItem}>
                    <Text style={styles.allergenBullet}>•</Text>
                    <Text style={styles.allergenListText}>{symptom}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Cross-contamination */}
            <View style={styles.allergenSection}>
              <Text style={styles.allergenSectionTitle}>Cross-contamination Risks</Text>
              <View style={styles.allergenList}>
                {allergenInfo.crossContamination.map((risk, riskIndex) => (
                  <View key={riskIndex} style={styles.allergenListItem}>
                    <Text style={styles.allergenBullet}>•</Text>
                    <Text style={styles.allergenListText}>{risk}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Management */}
            <View style={styles.allergenSection}>
              <Text style={styles.allergenSectionTitle}>Management</Text>
              <View style={styles.allergenList}>
                {allergenInfo.management.map((advice, adviceIndex) => (
                  <View key={adviceIndex} style={styles.allergenListItem}>
                    <Text style={styles.allergenBullet}>•</Text>
                    <Text style={styles.allergenListText}>{advice}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Related Allergens */}
            {allergenInfo.relatedAllergens && allergenInfo.relatedAllergens.length > 0 && (
              <View style={styles.allergenSection}>
                <Text style={styles.allergenSectionTitle}>Related Allergens</Text>
                <View style={styles.relatedAllergensContainer}>
                  {allergenInfo.relatedAllergens.map((related, relatedIndex) => (
                    <View key={relatedIndex} style={styles.relatedAllergenTag}>
                      <Text style={styles.relatedAllergenText}>{related}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  allergenCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderLeftWidth: 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  allergenHeader: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  allergenHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  allergenIcon: {
    marginRight: 12,
  },
  allergenWarningSymbol: {
    fontSize: 18,
  },
  allergenMainContent: {
    flex: 1,
  },
  allergenName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  allergenSeverity: {
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'capitalize',
  },
  expandIcon: {
    marginLeft: 12,
  },
  expandIconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  expandedAllergenContent: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  expandedAllergenContentInner: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  allergenSection: {
    marginBottom: 16,
  },
  allergenSectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  allergenSectionText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  allergenList: {
    gap: 4,
  },
  allergenListItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  allergenBullet: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 2,
  },
  allergenListText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    flex: 1,
  },
  relatedAllergensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  relatedAllergenTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  relatedAllergenText: {
    fontSize: 12,
    color: '#374151',
  },
  allergenFallback: {
    backgroundColor: '#FEF2F2',
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  allergenFallbackText: {
    fontSize: 14,
    color: '#991B1B',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
