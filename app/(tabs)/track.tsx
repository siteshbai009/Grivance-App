import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// --- Mock Data ---
const grievancesData = [
  {
    id: '1',
    status: 'Pending',
    title: 'Academic Misconduct',
    date: '2023-09-15',
    // Placeholder image
    image: 'https://img.freepik.com/free-vector/university-student-cap-gown-looking-thoughtful_1308-107383.jpg',
  },
  {
    id: '2',
    status: 'Under Review',
    title: 'Facilities Issue',
    date: '2023-08-22',
    // Placeholder image
    image: 'https://img.freepik.com/free-vector/loft-room-interior-with-armchair-brick-wall-window_107791-3221.jpg',
  },
  {
    id: '3',
    status: 'Resolved',
    title: 'Administrative Error',
    date: '2023-07-10',
    // Placeholder image
    image: 'https://img.freepik.com/free-vector/business-man-working-hard-office_113065-224.jpg',
  },
];

// --- Reusable Component for Each Grievance Card ---
const GrievanceCard = ({ item }) => {
  const getStatusColor = () => {
    switch (item.status) {
      case 'Pending':
        return '#FFA500'; // Orange
      case 'Under Review':
        return '#007AFF'; // Blue
      case 'Resolved':
        return '#34C759'; // Green
      default:
        return '#8A8A8E'; // Gray
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardTextContainer}>
        <Text style={[styles.cardStatus, { color: getStatusColor() }]}>{item.status}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>Submitted on: {item.date}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
    </View>
  );
};

// --- Main Track Status Screen Component ---
export default function TrackStatusScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track Status</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <FlatList
        data={grievancesData}
        renderItem={({ item }) => <GrievanceCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
            <Text style={styles.yourGrievancesTitle}>Your Grievances</Text>
        }
      />
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA', // Light grey background for the whole page
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#F7F8FA',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  headerRightPlaceholder: {
    width: 24,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  yourGrievancesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardStatus: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  cardDate: {
    fontSize: 14,
    color: '#8A8A8E',
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 15,
  },
});