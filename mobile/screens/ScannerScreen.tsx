import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchProductFromOpenFoodFacts } from '../lib/openFoodFacts';
import BarcodeScanner from '../components/BarcodeScanner';

export default function ScannerScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleScan = async (barcode: string) => {
    setLoading(true);

    try {
      // Fetch product directly from OpenFoodFacts API
      const productData = await fetchProductFromOpenFoodFacts(barcode);

      if (!productData) {
        throw new Error('Product not found in OpenFoodFacts database.');
      }

      // Navigate to product detail
      navigation.navigate('ProductDetail' as never, { barcode } as never);
    } catch (err: any) {
      console.error('Error fetching product:', err);
      Alert.alert('Error', err.message || 'Failed to fetch product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: Error) => {
    Alert.alert('Scanner Error', error.message);
  };

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        console.log(e.endCoordinates.height);
        
      }
    );
    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      enabled={Platform.OS === 'ios'}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: keyboardHeight > 0 ? 150 : 20 }
          // {paddingBottom:150}
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={Platform.OS === 'ios'}
        nestedScrollEnabled={true}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : (
          <BarcodeScanner onScan={handleScan} onError={handleError} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

