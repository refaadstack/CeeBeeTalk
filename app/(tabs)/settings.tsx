import { router } from 'expo-router';
import React from 'react';
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function SettingsScreen() {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [largeText, setLargeText] = React.useState(false);
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);
  const [activeHelpSection, setActiveHelpSection] = React.useState(null);

  const handleLogout = () => {
    Alert.alert(
      "Keluar Aplikasi",
      "Apakah Anda yakin ingin keluar dari aplikasi?",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        { 
          text: "Keluar", 
          onPress: () => router.push('/(tabs)/') 
        }
      ]
    );
  };

  const openHelpModal = () => {
    setActiveHelpSection('panduan');
    setHelpModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Kembali</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pengaturan</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Image 
                source={require('../../assets/images/icon.jpg')} 
                style={styles.logo}
                // Fallback untuk ketika gambar belum ada
                onError={(e) => console.log('Image not found, please add icon.jpg to assets folder')}
              />
          </View>
          <Text style={styles.profileName}>Pengguna CeeBee Talk</Text>
        </View>

        

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
          
          <TouchableOpacity style={styles.menuItem} onPress={openHelpModal}>
            <Text style={styles.menuItemText}>Panduan Pengguna</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Versi Aplikasi: 1.0.0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Pembuat Aplikasi</Text>
          <Text style={styles.menuItemText}>Harry mandiri</Text>
          <Text style={styles.menuItemText}>Veny Yuliati</Text>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Keluar Aplikasi</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Help Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={helpModalVisible}
        onRequestClose={() => setHelpModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Bantuan</Text>
              <TouchableOpacity onPress={() => setHelpModalVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <TouchableOpacity 
                style={[
                  styles.helpSectionButton, 
                  activeHelpSection === 'panduan' && styles.activeHelpSection
                ]}
                onPress={() => setActiveHelpSection('panduan')}
              >
                <Text style={styles.helpSectionTitle}>Panduan Pengguna</Text>
              </TouchableOpacity>

              {activeHelpSection === 'panduan' && (
                <View style={styles.helpContent}>
                  <Text style={styles.helpContentTitle}>CeeBee Talk</Text>
                  <Text style={styles.helpContentText}>
                    CeeBee Talk adalah aplikasi komunikasi yang dirancang untuk membantu pengguna atau anak-anak Cerebral Palsy yang tidak dapat mengucapkan artikulasi dengan jelas, menggunakan simbol visual dan output suara sehingga membantu komunikasi yang lebih baik antara anak dan lingkungan sekitarnya.
                  </Text>
                  
                  <Text style={styles.helpSectionSubtitle}>Berikut cara menggunakannya:</Text>
                  
                  <View style={styles.helpStep}>
                    <Text style={styles.helpStepNumber}>1</Text>
                    <View style={styles.helpStepContent}>
                      <Text style={styles.helpStepTitle}>Buka Aplikasi CeeBee Talk</Text>
                      <Text style={styles.helpStepText}>
                        Pengguna dapat membuka aplikasi melalui perangkat yang tersedia seperti laptop, tablet dan hp
                      </Text>
                    </View>
                  </View>
                  
                  <View style={styles.helpStep}>
                    <Text style={styles.helpStepNumber}>2</Text>
                    <View style={styles.helpStepContent}>
                      <Text style={styles.helpStepTitle}>Pilih Komunikasi</Text>
                      <Text style={styles.helpStepText}>
                        Setelah memilih Komunikasi, akan tampil banyak simbol dan suara. Pengguna cukup mengklik simbol yang diinginkan
                      </Text>
                    </View>
                  </View>

                  <View style={styles.helpStep}>
                    <Text style={styles.helpStepNumber}>3</Text>
                    <View style={styles.helpStepContent}>
                      <Text style={styles.helpStepTitle}>Dengarkan suara</Text>
                      <Text style={styles.helpStepText}>
                        Setiap simbol yang diklik otomatis akan mengeluarkan suara yang sesuai (jika tersedia) untuk menyampaikan maksud
                      </Text>
                    </View>
                  </View>

                  <View style={styles.helpStep}>
                    <Text style={styles.helpStepNumber}>4</Text>
                    <View style={styles.helpStepContent}>
                      <Text style={styles.helpStepTitle}>Ulangi sesuai kebutuhan</Text>
                      <Text style={styles.helpStepText}>
                        Pengguna dapat mengklik simbol sebanyak yang dibutuhkan untuk berkomunikasi
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F49BAB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F49BAB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileAvatarText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  settingsSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F49BAB',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff5252',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#ff5252',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F49BAB',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  closeButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 16,
  },
  helpSectionButton: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  activeHelpSection: {
    backgroundColor: '#F49BAB',
  },
  helpSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  helpContent: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  helpContentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  helpContentText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 16,
  },
  helpSectionSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  helpStep: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  helpStepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F49BAB',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 24,
    marginRight: 12,
  },
  helpStepContent: {
    flex: 1,
  },
  helpStepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  helpStepText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});