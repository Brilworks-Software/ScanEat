import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import {
  AlertTriangle,
  CheckCircle,
  Crown,
  Heart,
  Info,
  Loader2,
  X,
  XCircle,
} from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export type AlertType = 'success' | 'error' | 'warning' | 'info' | 'love' | 'premium' | 'confirm';

export interface AlertButton {
  text: string;
  style?: 'default' | 'cancel' | 'destructive' | 'primary';
  onPress?: () => void;
}

export interface AlertModalProps {
  visible: boolean;
  type?: AlertType;
  title: string;
  message?: string;
  buttons?: AlertButton[];
  onDismiss?: () => void;
  dismissible?: boolean;
  icon?: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'scale' | 'bounce';
  isProcessing?: boolean;
}

const alertConfig = {
  success: {
    icon: CheckCircle,
    iconColor: '#22C55E',
    backgroundColor: '#F0FDF4',
    borderColor: '#22C55E',
    titleColor: '#15803D',
    messageColor: '#166534',
    gradientColors: ['#22C55E', '#16A34A'],
  },
  error: {
    icon: XCircle,
    iconColor: '#EF4444',
    backgroundColor: '#FEF2F2',
    borderColor: '#EF4444',
    titleColor: '#B91C1C',
    messageColor: '#991B1B',
    gradientColors: ['#EF4444', '#DC2626'],
  },
  warning: {
    icon: AlertTriangle,
    iconColor: '#F59E0B',
    backgroundColor: '#FFFBEB',
    borderColor: '#F59E0B',
    titleColor: '#92400E',
    messageColor: '#78350F',
    gradientColors: ['#F59E0B', '#D97706'],
  },
  info: {
    icon: Info,
    iconColor: '#0EA5E9',
    backgroundColor: '#F0F9FF',
    borderColor: '#0EA5E9',
    titleColor: '#0369A1',
    messageColor: '#075985',
    gradientColors: ['#0EA5E9', '#0284C7'],
  },
  love: {
    icon: Heart,
    iconColor: '#EC4899',
    backgroundColor: '#FDF2F8',
    borderColor: '#EC4899',
    titleColor: '#BE185D',
    messageColor: '#9D174D',
    gradientColors: ['#EC4899', '#BE185D'],
  },
  premium: {
    icon: Crown,
    iconColor: '#D946EF',
    backgroundColor: '#FDF4FF',
    borderColor: '#D946EF',
    titleColor: '#A21CAF',
    messageColor: '#86198F',
    gradientColors: ['#D946EF', '#A21CAF'],
  },
  confirm: {
    icon: Info,
    iconColor: '#64748B',
    backgroundColor: '#F8FAFC',
    borderColor: '#64748B',
    titleColor: '#334155',
    messageColor: '#475569',
    gradientColors: ['#64748B', '#475569'],
  },
};

export function AlertModal({
  visible,
  type = 'info',
  title,
  message,
  buttons = [{ text: 'OK', style: 'primary' }],
  onDismiss,
  dismissible = true,
  icon,
  animationType = 'scale',
  isProcessing,
}: AlertModalProps) {
  const [localProcessing, setLocalProcessing] = useState(false);
  const backdropOpacity = useSharedValue(0);
  const modalScale = useSharedValue(0.8);
  const modalOpacity = useSharedValue(0);
  const modalTranslateY = useSharedValue(50);
  const iconScale = useSharedValue(0);
  const iconRotation = useSharedValue(0);
  const buttonScale = useSharedValue(0.9);
  const loadingRotation = useSharedValue(0);
  const prevProcessingRef = useRef(!!isProcessing || !!localProcessing);

  const config = alertConfig[type];
  // Normalize icon to a renderable component (could be ReactNode or lucide icon)
  const Icon = (icon || config.icon) as any;

  const triggerHaptic = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
  };

  useEffect(() => {
    if (visible) {
      // Entry animations
      backdropOpacity.value = withTiming(1, { duration: 300 });

      if (animationType === 'scale') {
        modalScale.value = withSpring(1, {
          damping: 20,
          stiffness: 300,
        });
        modalOpacity.value = withTiming(1, { duration: 300 });
      } else if (animationType === 'slide') {
        modalTranslateY.value = withSpring(0, {
          damping: 20,
          stiffness: 300,
        });
        modalOpacity.value = withTiming(1, { duration: 300 });
      } else if (animationType === 'bounce') {
        modalScale.value = withSequence(
          withSpring(1.1, { damping: 10 }),
          withSpring(1, { damping: 15 })
        );
        modalOpacity.value = withTiming(1, { duration: 300 });
      } else if (animationType === 'fade') {
        modalScale.value = 1;
        modalOpacity.value = withTiming(1, { duration: 300 });
      }

      // Icon animations
      iconScale.value = withDelay(
        200,
        withSequence(withSpring(1.3, { damping: 10 }), withSpring(1, { damping: 15 }))
      );

      if (type === 'love') {
        iconRotation.value = withSequence(
          withTiming(-10, { duration: 150 }),
          withTiming(10, { duration: 300 }),
          withTiming(0, { duration: 150 })
        );
      }

      // Button animations
      buttonScale.value = withDelay(400, withSpring(1, { damping: 15 }));

      runOnJS(triggerHaptic)();
    } else {
      // Exit animations
      backdropOpacity.value = withTiming(0, { duration: 200 });
      modalScale.value = withTiming(0.8, { duration: 200 });
      modalOpacity.value = withTiming(0, { duration: 200 });
      modalTranslateY.value = withTiming(50, { duration: 200 });
      iconScale.value = withTiming(0, { duration: 200 });
      buttonScale.value = withTiming(0.9, { duration: 200 });
    }
  }, [visible, animationType, type]);

  useEffect(() => {
    if (isProcessing || localProcessing) {
      loadingRotation.value = withTiming(360, { duration: 1000 }, () => {
        loadingRotation.value = 0;
      });
    }
  }, [isProcessing, localProcessing]);

  // Auto-close modal when external processing completes
  useEffect(() => {
    const prev = prevProcessingRef.current;
    const now = !!isProcessing || !!localProcessing;
    if (prev === true && now === false) {
      // Processing just completed, close modal after a short delay
      setTimeout(() => {
        if (onDismiss) {
          onDismiss();
        }
      }, 500); // Small delay to show completion
    }
    prevProcessingRef.current = now;
  }, [isProcessing, localProcessing, onDismiss]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  const modalStyle = useAnimatedStyle(() => {
    if (animationType === 'slide') {
      return {
        opacity: modalOpacity.value,
        transform: [{ translateY: modalTranslateY.value }],
      };
    }

    if (animationType === 'fade') {
      return {
        opacity: modalOpacity.value,
      };
    }

    return {
      opacity: modalOpacity.value,
      transform: [{ scale: modalScale.value }],
    };
  });

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }, { rotate: `${iconRotation.value}deg` }],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  const loadingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${loadingRotation.value}deg` }],
  }));

  const handleBackdropPress = () => {
    if (dismissible && onDismiss) {
      onDismiss();
    }
  };

  const handleButtonPress = async (button: AlertButton) => {
    try {
      const res = button.onPress && button.onPress();

      // If onPress returned a promise, treat it as processing
      if (res && typeof (res as any).then === 'function') {
        setLocalProcessing(true);
        try {
          await res;
        } finally {
          setLocalProcessing(false);
          // Only dismiss after processing completes (and if onDismiss exists)
          if (onDismiss) {
            onDismiss();
          }
        }
        return;
      }

      // If we are already processing (external or local), don't dismiss immediately
      if (isProcessing || localProcessing) {
        return;
      }

      // synchronous handler - dismiss immediately
      if (onDismiss) {
        onDismiss();
      }
    } catch (err) {
      // If handler throws, stop local processing and rethrow/log
      setLocalProcessing(false);
      if (onDismiss && !(isProcessing || localProcessing)) {
        onDismiss();
      }
      throw err;
    }
  };

  const getButtonStyle = (styleType: string) => {
    switch (styleType) {
      case 'primary':
        return {
          backgroundColor: config.borderColor,
          borderColor: config.borderColor,
        };
      case 'destructive':
        return {
          backgroundColor: '#FFFFFF',
          borderColor: '#EF4444',
        };
      case 'cancel':
        return {
          backgroundColor: '#FFFFFF',
          borderColor: '#D1D5DB',
        };
      default:
        return {
          backgroundColor: '#F3F4F6',
          borderColor: '#D1D5DB',
        };
    }
  };

  const getButtonTextStyle = (styleType: string) => {
    switch (styleType) {
      case 'primary':
        return {
          color: '#FFFFFF',
          fontWeight: '600' as const,
        };
      case 'destructive':
        return {
          color: '#EF4444',
          fontWeight: '600' as const,
        };
      case 'cancel':
        return {
          color: '#4B5563',
          fontWeight: '500' as const,
        };
      default:
        return {
          color: '#1F2937',
          fontWeight: '500' as const,
        };
    }
  };

  return (
    <Modal visible={visible} transparent animationType="none" statusBarTranslucent>
      {/* Backdrop */}
      <Animated.View style={[backdropStyle, { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleBackdropPress}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          {/* Modal Container */}
          <Animated.View style={[modalStyle, { width: '100%', maxWidth: 384 }]}>
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <BlurView
                intensity={95}
                tint="light"
                style={{ borderRadius: 24, overflow: 'hidden' }}>
                <View
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 24,
                    shadowColor: config.borderColor,
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 0.15,
                    shadowRadius: 25,
                    elevation: 20,
                  }}>
                  {/* Close button for dismissible modals */}
                  {dismissible && (
                    <TouchableOpacity
                      onPress={onDismiss}
                      style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 10,
                        backgroundColor: 'rgba(243, 244, 246, 0.8)',
                        borderRadius: 9999,
                        padding: 8,
                      }}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                      <X size={16} color="#64748B" strokeWidth={2} />
                    </TouchableOpacity>
                  )}

                  {/* Content */}
                  <View style={{ padding: 32, paddingTop: 48 }}>
                    {/* Icon */}
                    <Animated.View style={[iconStyle, { alignItems: 'center', marginBottom: 24 }]}>
                      <View
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.3,
                          shadowRadius: 4,
                          backgroundColor: config.backgroundColor,
                          borderWidth: 2,
                          borderColor: config.borderColor + '40',
                        }}>
                        <Icon
                          size={36}
                          color={config.iconColor}
                          strokeWidth={2}
                          fill={type === 'love' || type === 'premium' ? config.iconColor : 'none'}
                        />
                      </View>
                    </Animated.View>

                    {/* Title */}
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: '700',
                        textAlign: 'center',
                        marginBottom: 12,
                        lineHeight: 28,
                        color: config.titleColor,
                      }}>
                      {title}
                    </Text>

                    {/* Message */}
                    {message && (
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'center',
                          lineHeight: 24,
                          marginBottom: 32,
                          color: config.messageColor,
                        }}>
                        {message}
                      </Text>
                    )}

                    {/* Buttons */}
                    <Animated.View
                      style={[
                        buttonStyle,
                        {
                          gap: 12,
                          flexDirection:
                            buttons.length > 2 ? 'column' : buttons.length === 2 ? 'row' : 'column',
                        },
                      ]}>
                      {buttons.map((button, index) => {
                        const buttonStyleConfig = getButtonStyle(button.style || 'default');
                        const buttonTextStyleConfig = getButtonTextStyle(button.style || 'default');
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleButtonPress(button)}
                            disabled={isProcessing || localProcessing}
                            style={[
                              {
                                paddingVertical: 16,
                                paddingHorizontal: 24,
                                borderRadius: 16,
                                borderWidth: 2,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: button.style === 'primary' ? config.borderColor : '#000',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: button.style === 'primary' ? 0.2 : 0.1,
                                shadowRadius: 8,
                              },
                              buttonStyleConfig,
                              buttons.length === 2 ? { flex: 1 } : { width: '100%' },
                              (isProcessing || localProcessing) && button.style === 'primary'
                                ? { opacity: 0.8 }
                                : {},
                            ]}>
                            {(isProcessing || localProcessing) && button.style === 'primary' ? (
                              <>
                                <Animated.View style={[loadingStyle, { marginRight: 8 }]}>
                                  <Loader2
                                    size={16}
                                    color={button.style === 'primary' ? '#FFFFFF' : config.iconColor}
                                    strokeWidth={2}
                                  />
                                </Animated.View>
                              </>
                            ) : (
                              <Text
                                style={[
                                  {
                                    textAlign: 'center',
                                    fontSize: 16,
                                  },
                                  buttonTextStyleConfig,
                                ]}>
                                {button.text}
                              </Text>
                            )}
                          </TouchableOpacity>
                        );
                      })}
                    </Animated.View>
                  </View>
                </View>
              </BlurView>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
}
