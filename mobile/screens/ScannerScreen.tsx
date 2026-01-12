import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableOpacity, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductService } from '../lib/services/ProductService';
import BarcodeScanner from '../components/BarcodeScanner';
import { HistoryService } from '../lib/services/HistoryService';
import { auth } from '../lib/firebase';
import { fetchProductFromOpenFoodFacts } from '../lib/openFoodFacts';
import { Camera, Barcode, Sparkles } from 'lucide-react-native';
import { useToast } from '../utils/ToastManager';
import { LinearGradient } from 'expo-linear-gradient';


type ScanMode = 'barcode' | 'camera';

export default function ScannerScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [scanMode, setScanMode] = useState<ScanMode>('barcode');
  const userId = auth.currentUser?.uid || "";
  const toast = useToast();
  const fadeAnim = useState(new Animated.Value(1))[0];

  const handleScan = async (barcode: string) => {
    setLoading(true);
    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: 200,
      useNativeDriver: true,
    }).start();

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
        throw new Error("Product not found in the database.");
      }

      // Navigate to product detail
      navigation.navigate('ProductDetail' as never, { barcode } as never);
    } catch (err: any) {
      console.error('Error fetching product:', err);
      // const error = JSON.parse(err.message);
      // console.log("Error:", error)

      try{
        toast.showError("Product Scan Error", err.message || "An error occurred while scanning the product.");
      } catch(toastError){
        Alert.alert("Product Scan Error", err.message || "An error occurred while scanning the product.");
      }
    } finally {
      setLoading(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
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
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={Platform.OS === 'ios'}
        nestedScrollEnabled={true}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.headerIconContainer}>
            <LinearGradient
              colors={['#6366F1', '#8B5CF6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.headerIconGradient}
            >
              <Sparkles size={24} color="#fff" />
            </LinearGradient>
          </View>
          <Text style={styles.headerTitle}>Scan & Analyze</Text>
          <Text style={styles.headerSubtitle}>Get instant nutritional insights</Text>
        </View>

        {/* Mode Toggle */}
        <View style={styles.modeToggleContainer}>
          <TouchableOpacity
            style={[
              styles.modeToggleButton,
              scanMode === 'barcode' && styles.modeToggleButtonActive
            ]}
            onPress={() => setScanMode('barcode')}
            activeOpacity={0.7}
          >
            {scanMode === 'barcode' && (
              <LinearGradient
                colors={['#6366F1', '#8B5CF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modeToggleGradient}
              />
            )}
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
            activeOpacity={0.7}
          >
            {scanMode === 'camera' && (
              <LinearGradient
                colors={['#6366F1', '#8B5CF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modeToggleGradient}
              />
            )}
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
          <Animated.View style={[styles.loadingContainer, {  }]}>
            <View style={styles.loadingCard}>
              <LinearGradient
                colors={['#6366F1', '#8B5CF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.loadingIconContainer}
              >
                <ActivityIndicator size="large" color="#fff" />
              </LinearGradient>
              <Text style={styles.loadingText}>Analyzing product...</Text>
              <Text style={styles.loadingSubtext}>Please wait a moment</Text>
            </View>
          </Animated.View>
        ) : scanMode === 'barcode' ? (
          <Animated.View style={{ opacity: fadeAnim }}>
            <BarcodeScanner onScan={handleScan} onError={handleError} />
          </Animated.View>
        ) : (
          <Animated.View style={[styles.cameraModeContainer, { opacity: fadeAnim }]}>
            <View style={styles.cameraPlaceholder}>
              <LinearGradient
                colors={['#F0F9FF', '#E0E7FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cameraIconContainer}
              >
                <Camera size={56} color="#6366F1" strokeWidth={1.5} />
              </LinearGradient>
              <Text style={styles.cameraTitle}>Analyze Food with Camera</Text>
              <Text style={styles.cameraDescription}>
                Take a photo of your food to get detailed nutritional information and analysis powered by AI.
              </Text>
              <TouchableOpacity
                style={styles.takePhotoButton}
                onPress={() => navigation.navigate('Camera' as never)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#6366F1', '#8B5CF6']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.takePhotoButtonGradient}
                >
                  <Camera size={24} color="#fff" />
                  <Text style={styles.takePhotoButtonText}>Take Photo</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  headerIconContainer: {
    marginBottom: 16,
  },
  headerIconGradient: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    minHeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loadingCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  loadingIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  loadingSubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  modeToggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 20,
    borderRadius: 16,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  modeToggleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  modeToggleGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },
  modeToggleButtonActive: {
    // Gradient handled by LinearGradient component
  },
  modeToggleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6B7280',
    letterSpacing: -0.2,
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
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 24,
    padding: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },
  cameraIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  cameraTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  cameraDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  takePhotoButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  takePhotoButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingVertical: 18,
    gap: 12,
  },
  takePhotoButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: -0.3,
  },
});

