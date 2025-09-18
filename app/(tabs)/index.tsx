import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// --- Mock Data for the List ---
const grievancesData = [
  {
    id: '1',
    title: 'Grade Discrepancy',
    category: 'Academic',
    status: 'Resolved',
  },
  {
    id: '2',
    title: 'Broken AC in Dorm',
    category: 'Facilities',
    status: 'In Progress',
  },
  {
    id: '3',
    title: 'Transcript Request Delay',
    category: 'Administrative',
    status: 'Submitted',
  },
];

// --- Reusable Component for Each Grievance Item ---
const GrievanceItem = ({ title, category, status }) => {
  const getStatusColor = () => {
    if (status === 'Resolved') return '#28a745'; // Green
    if (status === 'In Progress') return '#ffc107'; // Orange/Yellow
    return '#8A8A8E'; // Gray for Submitted
  };

  return (
    <View style={styles.grievanceItem}>
      <View>
        <Text style={styles.grievanceTitle}>{title}</Text>
        <Text style={styles.grievanceCategory}>{category}</Text>
      </View>
      <Text style={[styles.grievanceStatus, { color: getStatusColor() }]}>
        {status}
      </Text>
    </View>
  );
};

// --- Main Home Screen Component ---
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerSide} />
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.headerSide}>
            <Feather name="bell" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Welcome Message */}
          <Text style={styles.welcomeText}>Welcome, Sitesh</Text>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Submit Grievance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Track Status</Text>
            </TouchableOpacity>
          </View>

          {/* Recent Grievances List */}
          <Text style={styles.sectionTitle}>Recent Grievances</Text>
          <FlatList
            data={grievancesData}
            renderItem={({ item }) => <GrievanceItem {...item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA', // Light grey background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerSide: {
    width: 24, // To balance the title
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    flex: 1, // Makes buttons share space
    marginRight: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#EFEFF4',
    paddingVertical: 14,
    borderRadius: 10,
    flex: 1, // Makes buttons share space
    marginLeft: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  grievanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  grievanceTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  grievanceCategory: {
    fontSize: 14,
    color: '#8A8A8E',
    marginTop: 4,
  },
  grievanceStatus: {
    fontSize: 15,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#EFEFF4',
  },
});

