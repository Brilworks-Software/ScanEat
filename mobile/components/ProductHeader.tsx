import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Product } from '../../shared/types/product';

interface ProductHeaderProps {
  product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  return (
    <View style={styles.header}>
      {/* Background Pattern */}
      <View style={styles.headerBackground}>
        <View style={styles.headerPattern} />
      </View>

      {/* Main Content Container */}
      <View style={styles.headerContent}>
        {/* Image Section */}
        {product.imageUrl && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.imageOverlay} />
          </View>
        )}

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.title} numberOfLines={2}>{product.name}</Text>

          {/* Brand and Category Row */}
          <View style={styles.metaRow}>
            {product.brand && (
              <View style={styles.brandContainer}>
                <Text style={styles.brand}>{product.brand}</Text>
              </View>
            )}
            {product.category && (
              <View style={styles.categoryContainer}>
                <Text style={styles.category}>{product.category}</Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Decorative Elements */}
      <View style={styles.headerDecoration}>
        <View style={styles.decorationDot} />
        <View style={styles.decorationDot} />
        <View style={styles.decorationDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerPattern: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    opacity: 0.5,
  },
  headerContent: {
    padding: 24,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 32,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#fff',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  productInfo: {
    alignItems: 'center',
    maxWidth: '90%',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  brandContainer: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  brand: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4338CA',
  },
  categoryContainer: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  category: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
    textTransform: 'capitalize',
  },
  headerDecoration: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  decorationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E5E7EB',
    opacity: 0.6,
  },
});
