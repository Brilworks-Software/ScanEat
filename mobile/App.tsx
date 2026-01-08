import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { FirebaseAuthTypes, onAuthStateChanged } from '@react-native-firebase/auth';
import { auth } from './lib/firebase';
import ScannerScreen from './screens/ScannerScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import HistoryScreen from './screens/HistoryScreen';
import AuthScreen from './screens/AuthScreen';
import CameraScreen from './screens/CameraScreen';
import NutritionAnalysisDetailScreen from './screens/NutritionAnalysisDetailScreen';
import NutritionAnalysisHistoryScreen from './screens/NutritionAnalysisHistoryScreen';
import HeaderMenu from './components/HeaderMenu';

const Stack = createNativeStackNavigator();

// Create a client for TanStack Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 30 * 60 * 1000, // 30 minutes
    },
  },
});

export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: FirebaseAuthTypes.User | null) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB' }}>
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <>
              <Stack.Screen
                name="Scanner"
                component={ScannerScreen}
                options={({ navigation }) => ({
                  headerShown: true,
                  title: 'Scaneat',
                  headerStyle: {
                    backgroundColor: '#6366F1',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => <HeaderMenu />,
                })}
              />
              <Stack.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="NutritionAnalysisDetail"
                component={NutritionAnalysisDetailScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{ 
                  headerShown: true,
                  title: 'Product Details',
                  headerStyle: {
                    backgroundColor: '#6366F1',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="History"
                component={HistoryScreen}
                options={{ 
                  headerShown: true,
                  title: 'Scan History',
                  headerStyle: {
                    backgroundColor: '#6366F1',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="NutritionAnalysisHistory"
                component={NutritionAnalysisHistoryScreen}
                options={{ 
                  headerShown: true,
                  title: 'Nutrition Analyses',
                  headerStyle: {
                    backgroundColor: '#6366F1',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Auth"
              component={AuthScreen}
              options={{ 
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
