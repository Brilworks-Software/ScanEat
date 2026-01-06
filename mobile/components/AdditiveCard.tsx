import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TriangleAlert, AlertTriangle, CheckCircle } from "lucide-react-native";
import { getAdditiveInfo, getConcernColorHex, getConcernColors, getConcernText, type AdditiveInfo } from '../lib/additives';

interface Additive {
  code: string;
}

interface AdditiveCardProps {
  additive: Additive;
}

export default function AdditiveCard({ additive }: AdditiveCardProps) {
  const additiveInfo = getAdditiveInfo(additive.code);
  const concern = additiveInfo?.concern || 'moderate';
  const concernColors = getConcernColors(concern);
  const concernText = getConcernText(concern);

  return (
    <View style={styles.additiveCard}>
      {/* Additive Header */}
      <View style={[styles.additiveHeader, { backgroundColor: concernColors.backgroundColor }]}>
        <View style={styles.additiveHeaderContent}>
          <Text style={styles.additiveCode}>{additive.code}</Text>
        </View>
        <View style={styles.concernBadge}>
          <Text style={styles.concernBadgeText}>{concernText}</Text>
        </View>
      </View>

      {/* Additive Details */}
      <View style={styles.additiveDetails}>
        {additiveInfo ? (
          <>
            <View style={styles.additiveCategory}>
              <Text style={styles.categoryText}>
                {additiveInfo.category}
              </Text>
              <Text style={styles.additiveDescription}>{additiveInfo.description}</Text>
            </View>

            {/* Why Avoid */}
            {additiveInfo.whyAvoid && additiveInfo.whyAvoid.length > 0 && (
              <View style={styles.additiveSection}>
                <View style={styles.sectionHeader}>
                  <TriangleAlert size={16} color="#DC2626" />
                  <Text style={styles.sectionTitleRed}>Why Avoid This Additive</Text>
                </View>
                <View style={styles.listContainer}>
                  {additiveInfo.whyAvoid.map((reason, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text style={styles.listBulletRed}>•</Text>
                      <Text style={styles.listText}>{reason}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Health Effects */}
            {additiveInfo.healthEffects && additiveInfo.healthEffects.length > 0 && (
              <View style={styles.additiveSection}>
                <View style={styles.sectionHeader}>
                  <AlertTriangle size={16} color="#F97316" />
                  <Text style={styles.sectionTitleOrange}>Potential Health Effects</Text>
                </View>
                <View style={styles.listContainer}>
                  {additiveInfo.healthEffects.map((effect, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text style={styles.listBulletOrange}>•</Text>
                      <Text style={styles.listText}>{effect}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Benefits */}
            {additiveInfo.benefits && additiveInfo.benefits.length > 0 && (
              <View style={styles.additiveSection}>
                <View style={styles.sectionHeader}>
                  <CheckCircle size={16} color="#10B981" />
                  <Text style={styles.sectionTitleGreen}>Benefits</Text>
                </View>
                <View style={styles.listContainer}>
                  {additiveInfo.benefits.map((benefit, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text style={styles.listBulletGreen}>✓</Text>
                      <Text style={styles.listText}>{benefit}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Alternatives */}
            {additiveInfo.alternatives && (
              <View style={styles.additiveSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitleBlue}>✓</Text>
                  <Text style={styles.sectionTitleBlue}>Better Alternatives</Text>
                </View>
                <Text style={styles.alternativesText}>{additiveInfo.alternatives}</Text>
              </View>
            )}
          </>
        ) : (
          <View style={styles.noAdditiveInfo}>
            <Text style={styles.noInfoText}>
              Limited information available for this additive. Consider researching before consuming.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  additiveCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  additiveHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  additiveHeaderContent: {
    flex: 1,
  },
  additiveCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  concernBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  concernBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  additiveDetails: {
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  additiveCategory: {
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  additiveDescription: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  additiveSection: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionTitleRed: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DC2626',
  },
  sectionTitleOrange: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F97316',
  },
  sectionTitleGreen: {
    fontSize: 14,
    fontWeight: '700',
    color: '#10B981',
  },
  sectionTitleBlue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },
  listContainer: {
    gap: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  listBulletRed: {
    color: '#DC2626',
    fontSize: 14,
    marginTop: 2,
  },
  listBulletOrange: {
    color: '#F97316',
    fontSize: 14,
    marginTop: 2,
  },
  listBulletGreen: {
    color: '#10B981',
    fontSize: 14,
    marginTop: 2,
  },
  listText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    flex: 1,
  },
  alternativesText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  noAdditiveInfo: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  noInfoText: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
  },
});
