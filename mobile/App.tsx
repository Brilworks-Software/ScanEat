import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { navigationRef } from "./utils/navigationRef";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import {
  FirebaseAuthTypes,
  onAuthStateChanged,
} from "@react-native-firebase/auth";
import { auth } from "./lib/firebase";
import ScannerScreen from "./screens/ScannerScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import HistoryScreen from "./screens/HistoryScreen";
import AuthScreen from "./screens/AuthScreen";
import CameraScreen from "./screens/CameraScreen";
import NutritionAnalysisDetailScreen from "./screens/NutritionAnalysisDetailScreen";
import NutritionAnalysisHistoryScreen from "./screens/NutritionAnalysisHistoryScreen";
import HeaderMenu from "./components/HeaderMenu";
import { ToastProvider } from "./utils/ToastManager";
import { AlertProvider } from "./utils/AlertManager";
import {
  GestureHandlerRootView,
  GestureDetector,
} from "react-native-gesture-handler";
import { createTouchGesture } from "./utils/analytics/events/TouchTracker";
import { registerSessionTracking } from "./utils/analytics/events/SessionTracker";
import { registerButtonTracking } from "./utils/analytics/events/ButtonTracker";
import { registerNavigationTracking } from "./utils/analytics/events/NavigationTracker";
import { trackScreenView } from "./utils/analytics/events/ScreenTracker";
import { PostHogProvider } from "posthog-react-native";

import { useScreenTracking as PostHogScreenTracking } from "./posthog/useScreenTracking";

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

function RootLayout() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);


  
  PostHogScreenTracking(navigationRef);
  // Register analytics trackers
  useEffect(() => {
    registerSessionTracking();

    registerButtonTracking();

    const timeoutId = setTimeout(() => {
      registerNavigationTracking(navigationRef);
    }, 100);

    // SCREEN VIEW TRACKING
    // Listen to state changes to track screen views
    const unsubscribe = navigationRef.addListener("state", () => {
      const route = navigationRef.getCurrentRoute() as any;
      if (route) {
        trackScreenView(route.name);
      }
    });

    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, [navigationRef]);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseAuthTypes.User | null) => {
        setUser(user);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9FAFB",
        }}
      >
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }
  return (
    
      
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
                title: "Scaneat",
                headerStyle: {
                  backgroundColor: "#6366F1",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
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
                headerShown: true,
                title: "Nutrition Analysis",
                headerStyle: {
                  backgroundColor: "#6366F1",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
              options={{
                headerShown: true,
                title: "Product Details",
                headerStyle: {
                  backgroundColor: "#6366F1",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="History"
              component={HistoryScreen}
              options={{
                headerShown: true,
                title: "Scan History",
                headerStyle: {
                  backgroundColor: "#6366F1",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="NutritionAnalysisHistory"
              component={NutritionAnalysisHistoryScreen}
              options={{
                headerShown: true,
                title: "Nutrition Analyses",
                headerStyle: {
                  backgroundColor: "#6366F1",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
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
  );
}

export default function App() {

  // TOUCH TRACKER
  const gesture = createTouchGesture();

  return (
    <NavigationContainer ref={navigationRef}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PostHogProvider
        apiKey={process.env.EXPO_PUBLIC_POSTHOG_API_KEY}
        options={{
          host: "https://us.i.posthog.com",
          enableSessionReplay: true,
          sessionReplayConfig: {
            maskAllTextInputs: true,
            maskAllImages: false,
            captureLog: true,
            captureNetworkTelemetry: true,
            throttleDelayMs: 1000,
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <GestureDetector gesture={gesture}>
            <ToastProvider>
              <AlertProvider>
                <RootLayout />
                <StatusBar style="auto" />
              </AlertProvider>
            </ToastProvider>
          </GestureDetector>
        </QueryClientProvider>
      </PostHogProvider>
    </GestureHandlerRootView>
    </NavigationContainer>
  );
}

