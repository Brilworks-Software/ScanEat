import { Gesture } from 'react-native-gesture-handler';
import Analytics from '../analytics';

export function createTouchGesture() {
  return Gesture.Tap()
    .onTouchesDown(() => {
      try {
        Analytics.log('touch_event', { type: 'start' });
      } catch (error: any) {
        console.warn("Touch event logging error:", error?.message || error);
      }
    })
    .onEnd(() => {
      try {
        Analytics.log('touch_event', { type: 'end' });
      } catch (error: any) {
        console.warn("Touch event logging error:", error?.message || error);
      }
    });
}