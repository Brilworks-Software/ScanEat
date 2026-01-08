import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Camera, X, RotateCcw } from 'lucide-react-native';
import { auth } from '../lib/firebase';
import { NutritionAnalysisService } from '../lib/services/NutritionAnalysisService';
import { ImageUploadService } from '../lib/services/ImageUploadService';
import { processImageWithGemini } from '../utils/gemini';

export default function CameraScreen() {
  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState<any>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [facing, setFacing] = useState<CameraType>('back');
  const [loading, setLoading] = useState(false);

  const handleTakePhoto = async () => {
    if (cameraRef && !loading) {
      setLoading(true);
      try {
        const photoData = await cameraRef.takePictureAsync({
          quality: 0.7,
          base64: false,
          exif: false,
        });
        setPhoto(photoData.uri);
      } catch (error) {
        console.error('Error taking photo:', error);
        Alert.alert('Error', 'Failed to take photo. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRetakePhoto = () => {
    setPhoto(null);
  };

  const handleUsePhoto = async () => {
    if (!photo) return;

    if (!auth.currentUser) {
      Alert.alert('Authentication Required', 'Please log in to analyze food photos.');
      return;
    }

    setLoading(true);

    try {
      // Step 1: Analyze image with Gemini first
      const response = await fetch(photo);
      const blob = await response.blob();
      const file = new File([blob], 'captured-image.jpg', { type: 'image/jpeg' });

      const result = await processImageWithGemini(file);
      const detectedFood = JSON.parse(result);

      // Step 2: After successful analysis, upload image to Firebase Storage
      const imageFileName = `food-analysis-${Date.now()}.jpg`;
      const uploadResult = await ImageUploadService.uploadImage(photo, imageFileName);
      const imageUrl = uploadResult.downloadURL;

      // Step 3: Save analysis to Firebase with the uploaded image URL
      const savedAnalysis = await NutritionAnalysisService.saveAnalysis(
        auth.currentUser.uid,
        detectedFood,
        imageUrl,
        imageFileName
      );

      // Step 4: Navigate to detail screen with analysis ID
      navigation.navigate('NutritionAnalysisDetail' as never, { analysisId: savedAnalysis.id } as never);
    } catch (error: any) {
      console.error('Error processing photo:', error);
      Alert.alert('Error', error.message || 'Failed to analyze the photo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.text}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Camera Access Required</Text>
        <Text style={styles.text}>
          We need camera permission to analyze food photos for nutritional information.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (photo) {
    return (
      <View style={styles.container}>
        <View style={styles.photoPreview}>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>

        <View style={styles.photoActions}>
          <TouchableOpacity
            style={[styles.photoButton, styles.retakeButton]}
            onPress={handleRetakePhoto}
            disabled={loading}
          >
            <RotateCcw size={24} color="#6B7280" />
            <Text style={styles.retakeButtonText}>Retake</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.photoButton, styles.useButton, loading && styles.useButtonDisabled]}
            onPress={handleUsePhoto}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.useButtonText}>Analyze Food</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={setCameraRef}
        style={styles.camera}
        facing={facing}
      >
        <View style={styles.cameraOverlay}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <X size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.cameraFrame}>
            <View style={styles.frame} />
            <Text style={styles.instructionText}>
              Position your food within the frame
            </Text>
          </View>

          <View style={styles.cameraControls}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={toggleCameraFacing}
            >
              <RotateCcw size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.captureButton, loading && styles.captureButtonDisabled]}
              onPress={handleTakePhoto}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <View style={styles.captureButtonInner} />
              )}
            </TouchableOpacity>

            <View style={styles.placeholder} />
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    paddingTop: 50,
  },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  cameraFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    width: 280,
    height: 280,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 16,
    backgroundColor: 'transparent',
  },
  instructionText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 12,
    borderRadius: 8,
  },
  cameraControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  flipButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    padding: 12,
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 4,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonDisabled: {
    opacity: 0.6,
  },
  captureButtonInner: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: '#000',
  },
  placeholder: {
    width: 48,
  },
  photoPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  photoActions: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#000',
    gap: 20,
  },
  photoButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retakeButton: {
    backgroundColor: '#374151',
    flexDirection: 'row',
    gap: 8,
  },
  retakeButtonText: {
    color: '#D1D5DB',
    fontSize: 16,
    fontWeight: '600',
  },
  useButton: {
    backgroundColor: '#6366F1',
  },
  useButtonDisabled: {
    opacity: 0.6,
  },
  useButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
