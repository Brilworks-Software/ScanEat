import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductService } from '../lib/services/ProductService';
import BarcodeScanner from '../components/BarcodeScanner';
import { HistoryService } from '../lib/services/HistoryService';
import { auth } from '../lib/firebase';
import { fetchProductFromOpenFoodFacts } from '../lib/openFoodFacts';
import { Camera, Barcode } from 'lucide-react-native';


type ScanMode = 'barcode' | 'camera';

export default function ScannerScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [scanMode, setScanMode] = useState<ScanMode>('barcode');
  const userId = auth.currentUser?.uid || "";

  const handleScan = async (barcode: string) => {
    setLoading(true);

    try {
      // Add timeout protection
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Request timed out. Please try again.")),
          30000
        )
      );

      let productData: any;
      const productDBData = await ProductService.getProduct(barcode);
      if (productDBData) {
        await HistoryService.updateOrCreateHistory(
          userId || "",
          barcode
        );
        productData = productDBData;
      } else {
        try {
          productData = await Promise.race([
            fetchProductFromOpenFoodFacts(barcode),
            timeoutPromise,
          ]);
          await HistoryService.addToHistory(userId || "", productData);
          await ProductService.saveProduct(productData)
          console.log("Product fetched successfully:", productData);
        } catch (fetchError: any) {
          console.error("Error fetching product:", fetchError);
          throw new Error(
            fetchError.message || "Failed to fetch product from OpenFoodFacts"
          );
        }
      }

      if (!productData) {
        throw new Error("Product not found in OpenFoodFacts database.");
      }

      // Navigate to product detail
      navigation.navigate('ProductDetail' as never, { barcode } as never);
    } catch (err: any) {
      console.error('Error fetching product:', err);
      // const error = JSON.parse(err.message);
      // console.log("Error:", error)

      Alert.alert('Error', 'Product not found in the database.');
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: Error) => {
    // Alert.alert('Scanner Error', error.message);
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
        {/* Mode Toggle */}
        <View style={styles.modeToggleContainer}>
          <TouchableOpacity
            style={[
              styles.modeToggleButton,
              scanMode === 'barcode' && styles.modeToggleButtonActive
            ]}
            onPress={() => setScanMode('barcode')}
          >
            <Barcode size={20} color={scanMode === 'barcode' ? '#fff' : '#6B7280'} />
            <Text style={[
              styles.modeToggleText,
              scanMode === 'barcode' && styles.modeToggleTextActive
            ]}>
              Scan Barcode
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.modeToggleButton,
              scanMode === 'camera' && styles.modeToggleButtonActive
            ]}
            onPress={() => setScanMode('camera')}
          >
            <Camera size={20} color={scanMode === 'camera' ? '#fff' : '#6B7280'} />
            <Text style={[
              styles.modeToggleText,
              scanMode === 'camera' && styles.modeToggleTextActive
            ]}>
              Take Photo
            </Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : scanMode === 'barcode' ? (
          <BarcodeScanner onScan={handleScan} onError={handleError} />
        ) : (
          <View style={styles.cameraModeContainer}>
            <View style={styles.cameraPlaceholder}>
              <Camera size={48} color="#6B7280" />
              <Text style={styles.cameraTitle}>Analyze Food with Camera</Text>
              <Text style={styles.cameraDescription}>
                Take a photo of your food to get detailed nutritional information and analysis.
              </Text>
              <TouchableOpacity
                style={styles.takePhotoButton}
                onPress={() => navigation.navigate('Camera' as never)}
              >
                <Camera size={24} color="#fff" />
                <Text style={styles.takePhotoButtonText}>Take Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  modeToggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modeToggleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  modeToggleButtonActive: {
    backgroundColor: '#6366F1',
  },
  modeToggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  modeToggleTextActive: {
    color: '#fff',
  },
  cameraModeContainer: {
    flex: 1,
    minHeight: 500,
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    margin: 20,
    borderRadius: 16,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cameraTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 20,
    marginBottom: 12,
    textAlign: 'center',
  },
  cameraDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  takePhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  takePhotoButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

