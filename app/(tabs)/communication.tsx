import { Audio } from 'expo-av';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Contoh data gambar dan audio komunikasi
const communicationItems = [
  {
    id: '1',
    title: 'Mau Makan',
    imageSource: require('../../assets/communication/makan.png'),
    audioSource: require('../../assets/communication/audio/saya_mau_makan.mp3'),
  },
  {
    id: '2',
    title: 'Mau Minum',
   imageSource: require('../../assets/communication/minum.jpg'),
    audioSource: require('../../assets/communication/audio/saya_mau_minum.mp3'),
  },
  {
    id: '3',
    title: 'Toilet',
    imageSource: require('../../assets/communication/toilet.jpg'),
    audioSource: require('../../assets/communication/audio/saya_mau_ke_toilet.mp3'),
  },
  {
    id: '4',
    title: 'Mau Tidur',
     imageSource: require('../../assets/communication/tidur.png'),
    audioSource: require('../../assets/communication/audio/saya_mau_tidur.mp3'),
  },
  {
    id: '5',
    title: 'Sakit',
     imageSource: require('../../assets/communication/sakit.jpg'),
    audioSource: require('../../assets/communication/audio/saya_sedang_sakit.mp3'),
  },
  {
    id: '6',
    title: 'Mau Ke Sekolah',
     imageSource: require('../../assets/communication/sekolah.png'),
    audioSource: require('../../assets/communication/audio/saya_mau_ke_sekolah.mp3'),
  },
  {
    id: '7',
    title: 'senang',
     imageSource: require('../../assets/communication/senang.jpg'),
    audioSource: require('../../assets/communication/audio/saya_senang.mp3'),
  },
  {
    id: '8',
    title: 'mau ganti baju',
     imageSource: require('../../assets/communication/ganti_baju.jpg'),
    audioSource: require('../../assets/communication/audio/saya_mau_ganti_baju.mp3'),
  },
  {
    id: '9',
    title: 'mau ganti celana',
     imageSource: require('../../assets/communication/ganti_celana.jpeg'),
    audioSource: require('../../assets/communication/audio/saya_mau_ganti_celana.mp3'),
  },
  {
    id: '10',
    title: 'mau belajar',
     imageSource: require('../../assets/communication/belajar.jpg'),
    audioSource: require('../../assets/communication/audio/saya_mau_belajar.mp3'),
  },
  {
    id: '11',
    title: 'mau mandi',
     imageSource: require('../../assets/communication/mandi.jpg'),
    audioSource: require('../../assets/communication/audio/saya_mau_mandi.mp3'),
  },
  {
    id: '12',
    title: 'tidak mengerti',
     imageSource: require('../../assets/communication/ga_ngerti.jpg'),
    audioSource: require('../../assets/communication/audio/saya_tidak_mengerti.mp3'),
  },
  {
    id: '13',
    title: 'mau ke kelas',
     imageSource: require('../../assets/communication/kelas.jpg'),
    audioSource: require('../../assets/communication/audio/saya_mau_ke_kelas.mp3'),
  },
  {
    id: '14',
    title: 'mau pulang',
     imageSource: require('../../assets/communication/pulang.jpeg'),
    audioSource: require('../../assets/communication/audio/saya_mau_pulang.mp3'),
  },
  {
    id: '15',
    title: 'Takut',
     imageSource: require('../../assets/communication/takut.png'),
    audioSource: require('../../assets/communication/audio/saya_takut.mp3'),
  },
  {
    id: '16',
    title: 'Terima Kasih',
     imageSource: require('../../assets/communication/terimakasih.jpg'),
    audioSource: require('../../assets/communication/audio/terima_kasih.mp3'),
  },
];

// Definisi tipe untuk item komunikasi
type CommunicationItem = {
  id: string;
  title: string;
  imageSource: any;
  audioSource: any;
};

export default function CommunicationScreen() {
  const [selectedItem, setSelectedItem] = useState<CommunicationItem | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const playSound = async (audioSource: any) => {
    try {
      // Stop any currently playing sound
      if (sound) {
        try {
          await sound.stopAsync();
        } catch (e) {
          console.warn('Error stopping sound:', e);
        }
        try {
          await sound.unloadAsync();
        } catch (e) {
          console.warn('Error unloading sound:', e);
        }
        setSound(null);
      }

      // Load and play the new sound
      const { sound: newSound } = await Audio.Sound.createAsync(audioSource);
      setSound(newSound);
      await newSound.playAsync();
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  const handleImagePress = async (item: CommunicationItem) => {
    // Putar suara
    await playSound(item.audioSource);
    
    // Tampilkan modal dengan gambar yang lebih besar
    setSelectedItem(item);
  };

  const closeModal = async () => {
    // Stop sound when closing modal
    if (sound) {
      try {
        await sound.stopAsync();
      } catch (e) {
        console.warn('Error stopping sound on close:', e);
      }
      try {
        await sound.unloadAsync();
      } catch (e) {
        console.warn('Error unloading sound on close:', e);
      }
      setSound(null);
    }
    setSelectedItem(null);
  };

  const renderItem = ({ item }: { item: CommunicationItem }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => handleImagePress(item)}
      accessibilityRole="button"
      accessibilityLabel={`Play audio for ${item.title}`}
      activeOpacity={0.7}
    >
      <Image 
        source={item.imageSource}
        style={styles.itemImage}
        onError={() => console.log(`Image for ${item.title} not found`)}
        accessible={true}
        accessibilityLabel={item.title}
      />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Komunikasi Visual</Text>
        {/* <TouchableOpacity 
          style={styles.settingsButton}
          onPress={() => router.push('/(tabs)/settings')}
          accessibilityRole="button"
          accessibilityLabel="Open settings"
        >
          <Text style={styles.settingsButtonText}>Pengaturan</Text>
        </TouchableOpacity> */}
         <View style={{ width: 50 }} />
      </View>

      <FlatList
        data={communicationItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal untuk menampilkan gambar yang lebih besar */}
      {selectedItem && (
        <Modal
          visible={!!selectedItem}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image 
                source={selectedItem.imageSource}
                style={styles.modalImage}
                resizeMode="contain"
                accessible={true}
                accessibilityLabel={selectedItem.title}
              />
              <Text style={styles.modalTitle}>{selectedItem.title}</Text>
              <TouchableOpacity 
                style={styles.modalCloseButton}
                onPress={closeModal}
                accessibilityRole="button"
                accessibilityLabel="Close modal"
              >
                <Text style={styles.modalCloseButtonText}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const itemWidth = (windowWidth - 60) / 2; // 60 = padding & gap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
  settingsButton: {
    backgroundColor: '#3046c7',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  settingsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    width: itemWidth,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: itemWidth - 24, // 24 = padding*2
    height: itemWidth - 24,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalImage: {
    width: '100%',
    height: 300,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalCloseButton: {
    backgroundColor: '#F49BAB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
