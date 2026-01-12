import { useEffect } from 'react';
import { Platform } from 'react-native';
import { usePostHog } from 'posthog-react-native';
import { NavigationContainerRef } from '@react-navigation/native';

export function useScreenTracking(navRef: NavigationContainerRef<any>) {
  const posthog = Platform.OS !== 'web' ? usePostHog() : null;

  useEffect(() => {
    if (!navRef) return;

    try {
      const unsubscribe = navRef.addListener("state", () => {
        const route = navRef.getCurrentRoute();
        if (route) {
          sendData(route.name, posthog);
          console.log("fgh");
        }
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      // Silently handle registration errors
      console.warn("Navigation tracking registration error:", error);
    }
  }, [navRef, posthog]);
}

function sendData(screenName: string, posthog: any) {
  if (!posthog) return;
  
  posthog.capture('screen_view', {
    $screen_name: screenName,
    platform: Platform.OS,
  });
  console.log("screen_view", screenName, Platform.OS, posthog);
  
}
