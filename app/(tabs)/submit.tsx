import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// --- Category Options ---
const CATEGORIES = ['Hostel', 'Academics', 'Administrative'];

// --- Main Submit Screen Component ---
export default function SubmitGrievanceScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (!title || !category || !description) {
      Alert.alert("Missing Information", "Please fill out all fields.");
      return;
    }
    // In a real app, you would send this data to a server
    console.log({ title, category, description });
    Alert.alert("Success", "Your grievance has been submitted.", [
        { text: "OK", onPress: () => router.back() }
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        {/* Custom Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Submit Grievance</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Grievance Title Input */}
          <Text style={styles.label}>Grievance Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the title of your grievance"
            placeholderTextColor="#C7C7CC"
            value={title}
            onChangeText={setTitle}
          />

          {/* Category Selector */}
          <Text style={styles.label}>Select Category</Text>
          <TouchableOpacity style={styles.selector} onPress={() => setModalVisible(true)}>
            <Text style={[styles.selectorText, category ? styles.selectorTextSelected : {}]}>
              {category || 'Select Category'}
            </Text>
            <Feather name="chevron-down" size={20} color="#8A8A8E" />
          </TouchableOpacity>
          
          {/* Detailed Description Input */}
          <Text style={styles.label}>Detailed Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe your issue in detail"
            placeholderTextColor="#C7C7CC"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          {/* File Upload */}
          <Text style={styles.label}>Upload File (Optional)</Text>
           <TouchableOpacity style={styles.uploadButton}>
            <Feather name="upload" size={22} color="#007AFF" />
            <Text style={styles.uploadText}>Attach a file</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Submit Button */}
        <View style={styles.footer}>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      
      {/* Category Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Category</Text>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={styles.modalOption}
                onPress={() => handleSelectCategory(cat)}
              >
                <Text style={styles.modalOptionText}>{cat}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[styles.modalOption, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={[styles.modalOptionText, styles.cancelButtonText]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF4',
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
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1e',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F7F8FA',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#EFEFF4',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  selector: {
    backgroundColor: '#F7F8FA',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#EFEFF4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectorText: {
    fontSize: 16,
    color: '#C7C7CC',
  },
  selectorTextSelected: {
      color: '#000',
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.05)'
  },
  uploadText: {
    marginTop: 10,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EFEFF4',
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#F7F8FA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20, // Safe area for bottom
  },
  modalTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#8A8A8E',
      textAlign: 'center',
      paddingVertical: 15,
  },
  modalOption: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 8,
  },
  modalOptionText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '500',
  },
  cancelButton: {
      marginTop: 10,
  },
  cancelButtonText: {
      color: '#FF3B30', // Red for cancel
      fontWeight: '600',
  },
});

