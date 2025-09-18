import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  StatusBar,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// --- Main Screen Component ---
export default function ProfileScreen() {

  const handleLogout = () => {
    // In a real app, you would handle the full logout logic here,
    // like clearing tokens and navigating to a login screen.
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Log Out", onPress: () => console.log("User logged out") }
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Profile</Text>
        
        <View style={styles.profileCard}>
            <View style={styles.avatar}>
                <Feather name="user" size={50} color="#007AFF" />
            </View>
            <Text style={styles.userName}>Sitesh</Text>
            <Text style={styles.userEmail}>Sitesh@giet.edu</Text>
        </View>

        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
                <Feather name="settings" size={22} color="#4A4A4A" />
                <Text style={styles.menuItemText}>Account Settings</Text>
                <Feather name="chevron-right" size={22} color="#C7C7CC" />
            </TouchableOpacity>
             <TouchableOpacity style={styles.menuItem}>
                <Feather name="help-circle" size={22} color="#4A4A4A" />
                <Text style={styles.menuItemText}>Help & Support</Text>
                <Feather name="chevron-right" size={22} color="#C7C7CC" />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1c1c1e',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E9F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  userEmail: {
    fontSize: 16,
    color: '#8e8e93',
    marginTop: 4,
  },
  menuContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemText: {
    fontSize: 17,
    marginLeft: 15,
    flex: 1,
  },
  logoutButton: {
    marginTop: 40,
    width: '100%',
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FF3B30',
    fontSize: 18,
    fontWeight: '600',
  },
});

