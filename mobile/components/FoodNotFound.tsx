import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AlertCircle, ArrowLeft } from 'lucide-react-native';

interface FoodNotFoundProps {
  error?: string | null;
  onBackPress?: () => void;
}

export default function FoodNotFound({ error, onBackPress }: FoodNotFoundProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      // Navigate to Scanner screen, matching web behavior
      navigation.navigate('Scanner' as never);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <AlertCircle size={64} color="#DC2626" strokeWidth={1.5} />
        </View>
        <Text style={styles.title}>Product Not Found</Text>
        <Text style={styles.message}>
          {error || 'The product could not be found.'}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleBackPress}
          activeOpacity={0.8}
        >
          <View pointerEvents="none">
            <ArrowLeft size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.buttonText}>Back to Scanner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    maxWidth: 400,
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    minWidth: 180,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

