import {
  AlertCircle,
  CheckCircle,
  Heart,
  Info,
  X,
  XCircle,
  Zap,
} from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

export type ToastType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'love'
  | 'premium';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onDismiss: (id: string) => void;
  position?: 'top' | 'bottom';
  showCloseButton?: boolean;
}

const toastConfig = {
  success: {
    icon: CheckCircle,
    colors: ['#22C55E', '#16A34A'],
    backgroundColor: '#F0FDF4',
    borderColor: '#22C55E',
    textColor: '#15803D',
    iconColor: '#22C55E',
  },
  error: {
    icon: XCircle,
    colors: ['#EF4444', '#DC2626'],
    backgroundColor: '#FEF2F2',
    borderColor: '#EF4444',
    textColor: '#B91C1C',
    iconColor: '#EF4444',
  },
  warning: {
    icon: AlertCircle,
    colors: ['#F59E0B', '#D97706'],
    backgroundColor: '#FFFBEB',
    borderColor: '#F59E0B',
    textColor: '#92400E',
    iconColor: '#F59E0B',
  },
  info: {
    icon: Info,
    colors: ['#0EA5E9', '#0284C7'],
    backgroundColor: '#F0F9FF',
    borderColor: '#0EA5E9',
    textColor: '#0369A1',
    iconColor: '#0EA5E9',
  },
  love: {
    icon: Heart,
    colors: ['#EC4899', '#BE185D'],
    backgroundColor: '#FDF2F8',
    borderColor: '#EC4899',
    textColor: '#BE185D',
    iconColor: '#EC4899',
  },
  premium: {
    icon: Zap,
    colors: ['#D946EF', '#A21CAF'],
    backgroundColor: '#FDF4FF',
    borderColor: '#D946EF',
    textColor: '#A21CAF',
    iconColor: '#D946EF',
  },
};

export function Toast({
  id,
  type,
  title,
  message,
  duration = 4000,
  onDismiss,
  position = 'top',
  showCloseButton = true,
}: ToastProps) {
  const translateY = useSharedValue(position === 'top' ? -200 : 200);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const progress = useSharedValue(0);
  const iconScale = useSharedValue(1);

  const config = toastConfig[type];
  const Icon = config.icon;

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Entry animation
    translateY.value = withSpring(0, {
      damping: 20,
      stiffness: 300,
    });
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 200,
    });

    // Icon bounce animation
    iconScale.value = withSequence(
      withSpring(1.3, { damping: 10 }),
      withSpring(1, { damping: 15 })
    );

    // Progress bar animation
    progress.value = withTiming(1, { duration });

    // Auto dismiss
    if (duration > 0) {
      timeoutRef.current = setTimeout(() => {
        handleDismiss();
      }, duration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDismiss = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Exit animation
    translateY.value = withSpring(position === 'top' ? -200 : 200, {
      damping: 20,
      stiffness: 300,
    });
    opacity.value = withTiming(0, { duration: 200 });
    scale.value = withTiming(0.8, { duration: 200 }, () => {
      runOnJS(onDismiss)(id);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
    opacity: opacity.value,
  }));

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }],
  }));

  const progressAnimatedStyle = useAnimatedStyle(() => ({
    width: `${interpolate(progress.value, [0, 1], [0, 100])}%`,
  }));

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: 'absolute',
          [position]: 60,
          left: 16,
          right: 16,
          zIndex: 1000,
        },
      ]}
    >
      <View
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          
          backgroundColor: config.backgroundColor,
          borderWidth: 1,
          borderColor: config.borderColor + '40',
          shadowColor: config.borderColor,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.15,
          shadowRadius: 16,
          elevation: 12,
        }}
      >
        {/* Progress bar */}
        <View style={{height: 4, backgroundColor: "#000000"}} >
          <Animated.View
            style={[
              progressAnimatedStyle,
              { backgroundColor: config.borderColor, height: '100%' },
            ]}
          />
        </View>

        {/* Content */}
        <View style={{ padding: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            {/* Icon */}
            <Animated.View style={[iconAnimatedStyle, { marginRight: 12, marginTop: 2 }]}>
              <View
                style={{ width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: config.borderColor + '20' }}
              >
                <Icon
                  size={18}
                  color={config.iconColor}
                  strokeWidth={2.5}
                  fill={
                    type === 'love' || type === 'premium'
                      ? config.iconColor
                      : 'none'
                  }
                />
              </View>
            </Animated.View>

            {/* Text content */}
            <View style={{ flex: 1 }}>
              <Text
                style={{ fontWeight: '600', fontSize: 16, lineHeight: 20, marginBottom: 4, color: config.textColor }}
              >
                {title}
              </Text>
              {message && (
                <Text
                  style={{ fontSize: 14, lineHeight: 20, opacity: 0.8, color: config.textColor }}
                >
                  {message}
                </Text>
              )}
            </View>

            {/* Close button */}
            {showCloseButton && (
              <TouchableOpacity
                onPress={handleDismiss}
                style={{ marginLeft: 8, padding: 4, borderRadius: 16, backgroundColor: config.borderColor + '15' }}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <X size={14} color={config.iconColor} strokeWidth={2} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
