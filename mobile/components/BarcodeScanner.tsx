import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
  onError?: (error: Error) => void;
}

export default function BarcodeScanner({ onScan, onError }: BarcodeScannerProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const [manualBarcode, setManualBarcode] = useState('');
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    // Check permission status on component mount (but don't auto-start scanning)
    // User will tap "Start Scanning" to begin
    if (permission && !permission.granted && !permission.canAskAgain) {
      // Permission was denied and can't ask again
      if (onError) {
        onError(new Error('Camera permission was denied. Please enable it in settings.'));
      }
    }
  }, [permission?.granted, permission?.canAskAgain, onError]);

  const handleBarCodeScanned = (result: BarcodeScanningResult) => {
    if (!scanned && result.data) {
      setScanned(true);
      onScan(result.data);
      // Reset after 2 seconds to allow re-scanning
      setTimeout(() => setScanned(false), 2000);
    }
  };

  const handleManualSubmit = () => {
    if (manualBarcode.trim()) {
      onScan(manualBarcode.trim());
      setManualBarcode('');
    }
  };

  const handleStartScanning = async () => {
    if (!permission) {
      // Permission status is still loading
      return;
    }

    if (permission.granted) {
      // Permission already granted, start scanning
      setIsScanning(true);
    } else {
      // Permission not granted, request it
      try {
        const result = await requestPermission();
        if (result.granted) {
          // Permission granted, start scanning
          setIsScanning(true);
        } else {
          // Permission denied
          if (onError) {
            onError(new Error('Camera permission is required to scan barcodes'));
          }
        }
      } catch (error) {
        console.error('Error requesting camera permission:', error);
        if (onError) {
          onError(error as Error);
        }
      }
    }
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Requesting camera permission...</Text>
      </View>
    );
  }

  // if (!permission.granted) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.text}>Camera permission is required to scan barcodes.</Text>
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={requestPermission}
  //       >
  //         <Text style={styles.buttonText}>Grant Permission</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {isScanning && permission?.granted ? (
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing={"back"}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e'],
            }}
          />
          <View style={styles.overlay}>
            <View style={styles.scanArea} />
            <Text style={styles.instructionText}>
              Position the barcode within the frame
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.text}>
            {permission?.granted ? 'Camera ready' : 'Waiting for camera permission...'}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleStartScanning}
          >
            <Text style={styles.buttonText}>Start Scanning</Text>
          </TouchableOpacity>
        </View>
      )}

      {isScanning && (
        <TouchableOpacity
          style={[styles.button, styles.stopButton]}
          onPress={() => setIsScanning(false)}
        >
          <Text style={styles.buttonText}>Stop Scanning</Text>
        </TouchableOpacity>
      )}

      <View style={styles.manualContainer}>
        <Text style={styles.dividerText}>OR</Text>
        <TextInput
          style={styles.input}
          value={manualBarcode}
          onChangeText={setManualBarcode}
          placeholder="Enter barcode manually"
          placeholderTextColor={"#999"}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleManualSubmit}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  cameraContainer: {
    height: 500,
    minHeight: 500,
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  instructionText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  placeholder: {
    height: 500,
    minHeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  stopButton: {
    backgroundColor: '#FF3B30',
    margin: 10,
  },
  manualContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  dividerText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#34C759',
  },
});

