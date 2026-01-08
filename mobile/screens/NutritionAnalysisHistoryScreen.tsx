import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { auth } from '../lib/firebase';
import { NutritionAnalysisService, NutritionAnalysis } from '../lib/services/NutritionAnalysisService';
import { Clock, Trash2, RefreshCw, Camera } from 'lucide-react-native';
import { onAuthStateChanged } from '@react-native-firebase/auth';

export default function NutritionAnalysisHistoryScreen() {
  const navigation = useNavigation();
  const [analyses, setAnalyses] = useState<NutritionAnalysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setAnalyses([]);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  // Load analyses when screen is focused or userId changes
  useFocusEffect(
    React.useCallback(() => {
      if (userId) {
        loadAnalyses();
      } else {
        setLoading(false);
      }
    }, [userId])
  );

  // Convert Firestore Timestamp to Date
  const convertTimestamp = (timestamp: any): Date => {
    if (timestamp instanceof Date) {
      return timestamp;
    }
    if (timestamp?.toDate && typeof timestamp.toDate === 'function') {
      return timestamp.toDate();
    }
    return new Date();
  };

  const loadAnalyses = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const analysesData = await NutritionAnalysisService.getUserAnalyses(userId);
      // Convert Firestore timestamps to Date objects if needed
      const processedAnalyses = analysesData.map((analysis) => ({
        ...analysis,
        analysisDate: convertTimestamp(analysis.analysisDate),
        createdAt: convertTimestamp(analysis.createdAt),
        updatedAt: convertTimestamp(analysis.updatedAt),
      }));
      setAnalyses(processedAnalyses);
    } catch (error: any) {
      console.error('Error loading nutrition analyses:', error);
      Alert.alert('Error', 'Failed to load nutrition analyses. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    if (!userId) return;
    
    setRefreshing(true);
    try {
      const analysesData = await NutritionAnalysisService.getUserAnalyses(userId);
      const processedAnalyses = analysesData.map((analysis) => ({
        ...analysis,
        analysisDate: convertTimestamp(analysis.analysisDate),
        createdAt: convertTimestamp(analysis.createdAt),
        updatedAt: convertTimestamp(analysis.updatedAt),
      }));
      setAnalyses(processedAnalyses);
    } catch (error: any) {
      console.error('Error refreshing nutrition analyses:', error);
      Alert.alert('Error', 'Failed to refresh nutrition analyses.');
    } finally {
      setRefreshing(false);
    }
  };

  const handleDeleteAnalysis = async (analysis: NutritionAnalysis) => {
    if (!userId) return;

    Alert.alert(
      'Delete Analysis',
      'Are you sure you want to delete this nutrition analysis?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await NutritionAnalysisService.deleteAnalysis(analysis.id);
              await loadAnalyses();
            } catch (error: any) {
              console.error('Error deleting analysis:', error);
              Alert.alert('Error', 'Failed to delete analysis.');
            }
          },
        },
      ]
    );
  };

  const handleAnalysisPress = (analysis: NutritionAnalysis) => {
    navigation.navigate('NutritionAnalysisDetail' as never, { 
      analysisId: analysis.id,
      imageUri: analysis.imageUrl 
    } as never);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  const formatValue = (value: number | string, unit: string = '') => {
    if (typeof value === 'string') return value;
    if (value === 0) return '0';
    return (value || 0).toFixed(0) + unit;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Loading analyses...</Text>
      </View>
    );
  }

  if (!userId) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Sign In Required</Text>
        <Text style={styles.emptyText}>
          Please sign in to view your nutrition analyses.
        </Text>
      </View>
    );
  }

  if (analyses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Camera size={64} color="#9CA3AF" />
        <Text style={styles.emptyTitle}>No Analyses Yet</Text>
        <Text style={styles.emptyText}>
          Your nutrition analyses will appear here after you analyze food images.
        </Text>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => navigation.navigate('Camera' as never)}
        >
          <Camera size={20} color="#fff" />
          <Text style={styles.cameraButtonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={handleRefresh}
        >
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Refresh Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.refreshHeaderButton}
          onPress={handleRefresh}
          disabled={refreshing}
        >
          {refreshing ? (
            <ActivityIndicator size="small" color="#6366F1" />
          ) : (
            <RefreshCw size={20} color="#6366F1" />
          )}
          <Text style={styles.refreshHeaderText}>
            {refreshing ? 'Refreshing...' : 'Refresh'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={analyses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.analysisItem}
            onPress={() => handleAnalysisPress(item)}
            activeOpacity={0.7}
          >
            {/* Image Preview */}
            <View style={styles.imageContainer}>
              {item.imageUrl ? (
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
              ) : (
                <View style={styles.placeholderImage}>
                  <Camera size={24} color="#9CA3AF" />
                </View>
              )}
            </View>

            {/* Analysis Info */}
            <View style={styles.analysisInfo}>
              <Text style={styles.analysisTitle} numberOfLines={1}>
                Nutrition Analysis
              </Text>
              <View style={styles.metaRow}>
                <View style={styles.timeContainer}>
                  <Clock size={14} color="#6B7280" />
                  <Text style={styles.timeText}>
                    {formatDate(item.analysisDate)}
                  </Text>
                </View>
              </View>
              
              {/* Quick Nutrition Summary */}
              <View style={styles.quickSummary}>
                <View style={styles.quickStat}>
                  <Text style={styles.quickStatLabel}>Calories</Text>
                  <Text style={[styles.quickStatValue, { color: '#F59E0B' }]}>
                    {formatValue(item.detectedFood.totalCalories, '')}
                  </Text>
                </View>
                <View style={styles.quickStat}>
                  <Text style={styles.quickStatLabel}>Protein</Text>
                  <Text style={[styles.quickStatValue, { color: '#2563EB' }]}>
                    {formatValue(item.detectedFood.totalProtein, 'g')}
                  </Text>
                </View>
                <View style={styles.quickStat}>
                  <Text style={styles.quickStatLabel}>Carbs</Text>
                  <Text style={[styles.quickStatValue, { color: '#16A34A' }]}>
                    {formatValue(item.detectedFood.totalCarbs, 'g')}
                  </Text>
                </View>
                <View style={styles.quickStat}>
                  <Text style={styles.quickStatLabel}>Fat</Text>
                  <Text style={[styles.quickStatValue, { color: '#CA8A04' }]}>
                    {formatValue(item.detectedFood.totalFat, 'g')}
                  </Text>
                </View>
              </View>

              {/* Food Items Count */}
              <Text style={styles.foodItemsCount}>
                {item.detectedFood.items.length} food item{item.detectedFood.items.length !== 1 ? 's' : ''} detected
              </Text>
            </View>

            {/* Delete Button */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteAnalysis(item)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Trash2 size={20} color="#EF4444" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="#6366F1"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#F9FAFB',
  },
  refreshHeaderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  refreshHeaderText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366F1',
    marginLeft: 6,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  loadingText: {
    marginTop: 10,
    color: '#6B7280',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    marginBottom: 12,
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  refreshButton: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#6366F1',
    fontSize: 16,
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
    paddingBottom: 20,
  },
  analysisItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
  },
  analysisInfo: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#6B7280',
  },
  quickSummary: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  quickStat: {
    alignItems: 'center',
    minWidth: 60,
  },
  quickStatLabel: {
    fontSize: 10,
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  quickStatValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  foodItemsCount: {
    fontSize: 12,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  deleteButton: {
    padding: 8,
    alignSelf: 'flex-start',
  },
});

