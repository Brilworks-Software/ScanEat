import React, { createContext, useCallback, useContext, useState } from 'react';
import { View } from 'react-native';
import { Toast, ToastProps } from './Toast';

interface ToastItem extends Omit<ToastProps, 'onDismiss'> {
  id: string;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  showSuccess: (
    title: string,
    message?: string,
    options?: Partial<ToastItem>
  ) => void;
  showError: (
    title: string,
    message?: string,
    options?: Partial<ToastItem>
  ) => void;
  showWarning: (
    title: string,
    message?: string,
    options?: Partial<ToastItem>
  ) => void;
  showInfo: (
    title: string,
    message?: string,
    options?: Partial<ToastItem>
  ) => void;
  showLove: (
    title: string,
    message?: string,
    options?: Partial<ToastItem>
  ) => void;
  showPremium: (
    title: string,
    message?: string,
    options?: Partial<ToastItem>
  ) => void;
  dismissToast: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
}

export function ToastProvider({ children, maxToasts = 3 }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const generateId = useCallback(() => {
    return `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const showToast = useCallback(
    (toast: Omit<ToastItem, 'id'>) => {
      const id = generateId();
      const newToast = { ...toast, id };

      setToasts((prev) => {
        const updated = [newToast, ...prev];
        // Limit the number of toasts
        return updated.slice(0, maxToasts);
      });
    },
    [generateId, maxToasts]
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const showSuccess = useCallback(
    (title: string, message?: string, options?: Partial<ToastItem>) => {
      showToast({ type: 'success', title, message, ...options });
    },
    [showToast]
  );

  const showError = useCallback(
    (title: string, message?: string, options?: Partial<ToastItem>) => {
      showToast({ type: 'error', title, message, ...options });
    },
    [showToast]
  );

  const showWarning = useCallback(
    (title: string, message?: string, options?: Partial<ToastItem>) => {
      showToast({ type: 'warning', title, message, ...options });
    },
    [showToast]
  );

  const showInfo = useCallback(
    (title: string, message?: string, options?: Partial<ToastItem>) => {
      showToast({ type: 'info', title, message, ...options });
    },
    [showToast]
  );

  const showLove = useCallback(
    (title: string, message?: string, options?: Partial<ToastItem>) => {
      showToast({ type: 'love', title, message, ...options });
    },
    [showToast]
  );

  const showPremium = useCallback(
    (title: string, message?: string, options?: Partial<ToastItem>) => {
      showToast({ type: 'premium', title, message, ...options });
    },
    [showToast]
  );

  const contextValue: ToastContextType = {
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLove,
    showPremium,
    dismissToast,
    dismissAll,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <View
        pointerEvents="box-none"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {toasts.map((toast, index) => (
          <Toast key={toast.id} {...toast} onDismiss={dismissToast} />
        ))}
      </View>
    </ToastContext.Provider>
  );
}
