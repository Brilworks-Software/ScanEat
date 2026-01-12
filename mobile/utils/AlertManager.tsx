import React, { createContext, useCallback, useContext, useState } from 'react';
import { AlertButton, AlertModal, AlertModalProps } from './AlertModal';

interface AlertItem extends Omit<AlertModalProps, 'visible' | 'onDismiss'> {
  id: string;
}

interface AlertContextType {
  showAlert: (alert: Omit<AlertItem, 'id'>) => void;
  showSuccess: (
    title: string,
    message?: string,
    buttons?: AlertButton[]
  ) => void;
  showError: (title: string, message?: string, buttons?: AlertButton[]) => void;
  showWarning: (
    title: string,
    message?: string,
    buttons?: AlertButton[]
  ) => void;
  showInfo: (title: string, message?: string, buttons?: AlertButton[]) => void;
  showLove: (title: string, message?: string, buttons?: AlertButton[]) => void;
  showPremium: (
    title: string,
    message?: string,
    buttons?: AlertButton[]
  ) => void;
  showConfirm: (
    title: string,
    message?: string,
    onConfirm?: () => void,
    onCancel?: () => void,
    isProcessing?: boolean
  ) => void;
  updateProcessing: (isProcessing: boolean) => void;
  dismissAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

interface AlertProviderProps {
  children: React.ReactNode;
}

export function AlertProvider({ children }: AlertProviderProps) {
  const [currentAlert, setCurrentAlert] = useState<AlertItem | null>(null);

  const generateId = useCallback(() => {
    return `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const showAlert = useCallback(
    (alert: Omit<AlertItem, 'id'>) => {
      const id = generateId();
      const newAlert = { ...alert, id };
      setCurrentAlert(newAlert);
    },
    [generateId]
  );

  const dismissAlert = useCallback(() => {
    setCurrentAlert(null);
  }, []);

  const updateProcessing = useCallback((isProcessing: boolean) => {
    setCurrentAlert((prev) => {
      if (prev) {
        return { ...prev, isProcessing };
      }
      return prev;
    });
  }, []);

  const showSuccess = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      showAlert({
        type: 'success',
        title,
        message,
        buttons: buttons || [{ text: 'Great!', style: 'primary' }],
        animationType: 'bounce',
      });
    },
    [showAlert]
  );

  const showError = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      showAlert({
        type: 'error',
        title,
        message,
        buttons: buttons || [{ text: 'OK', style: 'destructive' }],
        animationType: 'scale',
      });
    },
    [showAlert]
  );

  const showWarning = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      showAlert({
        type: 'warning',
        title,
        message,
        buttons: buttons || [{ text: 'Got it', style: 'primary' }],
        animationType: 'slide',
      });
    },
    [showAlert]
  );

  const showInfo = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      showAlert({
        type: 'info',
        title,
        message,
        buttons: buttons || [{ text: 'OK', style: 'primary' }],
        animationType: 'fade',
      });
    },
    [showAlert]
  );

  const showLove = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      showAlert({
        type: 'love',
        title,
        message,
        buttons: buttons || [{ text: 'Amazing!', style: 'primary' }],
        animationType: 'bounce',
      });
    },
    [showAlert]
  );

  const showPremium = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      showAlert({
        type: 'premium',
        title,
        message,
        buttons: buttons || [
          { text: 'Maybe Later', style: 'cancel' },
          { text: 'Upgrade Now', style: 'primary' },
        ],
        animationType: 'scale',
      });
    },
    [showAlert]
  );

  const showConfirm = useCallback(
    (
      title: string,
      message?: string,
      onConfirm?: () => void,
      onCancel?: () => void,
      isProcessing?: boolean
    ) => {
      showAlert({
        type: 'confirm',
        title,
        message,
        buttons: [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: onCancel,
          },
          {
            text: 'Confirm',
            style: 'primary',
            onPress: onConfirm,
          },
        ],
        animationType: 'scale',
        dismissible: false,
        isProcessing,
      });
    },
    [showAlert]
  );

  const contextValue: AlertContextType = {
    showAlert,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLove,
    showPremium,
    showConfirm,
    updateProcessing,
    dismissAlert,
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
      {currentAlert && (
        <AlertModal
          {...currentAlert}
          visible={!!currentAlert}
          onDismiss={dismissAlert}
        />
      )}
    </AlertContext.Provider>
  );
}
