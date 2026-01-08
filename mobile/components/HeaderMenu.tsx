import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { MoreVertical, History, LogOut, UtensilsCrossed } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import {signOut} from '@react-native-firebase/auth';
import { auth } from '../lib/firebase';

interface HeaderMenuProps {
  onLogout?: () => void;
}

export default function HeaderMenu({ onLogout }: HeaderMenuProps) {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleHistoryPress = () => {
    setMenuVisible(false);
    navigation.navigate('History' as never);
  };

  const handleNutritionAnalysisPress = () => {
    setMenuVisible(false);
    navigation.navigate('NutritionAnalysisHistory' as never);
  };

  const handleLogoutPress = () => {
    setMenuVisible(false);
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOut(auth);
              if (onLogout) {
                onLogout();
              }
            } catch (error: any) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
              console.error('Logout error:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setMenuVisible(true)}
        style={styles.menuButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <MoreVertical size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={handleHistoryPress}
                >
                  <History size={20} color="#111827" />
                  <Text style={styles.menuItemText}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={handleNutritionAnalysisPress}
                >
                  <UtensilsCrossed size={20} color="#111827" />
                  <Text style={styles.menuItemText}>Nutrition Analyses</Text>
                </TouchableOpacity>

                <View style={styles.separator} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={handleLogoutPress}
                >
                  <LogOut size={20} color="#DC2626" />
                  <Text style={[styles.menuItemText, styles.logoutText]}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 16,
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 16,
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    minWidth: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  logoutText: {
    color: '#DC2626',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 8,
  },
});

