import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Simulasi data gambar untuk komunikasi
// Pada implementasi nyata, Anda bisa menyimpan ini di folder assets
const communicationItems = [
  {
    id: '1',
    title: 'Makan',
    image: require('../assets/makan.png'), // Ganti dengan gambar sebenarnya
    sound: 'makan.mp3', // Untuk implementasi audio
  },
  {
    id: '2',
    title: 'Minum',
    image: require('../assets/minum.png'), // Ganti dengan gambar sebenarnya
    sound: 'minum.mp3',
  },
  {
    id: '3',
    title: 'Toilet',
    image: require('../assets/toilet.png'), // Ganti dengan gambar sebenarnya
    sound: 'toilet.mp3',
  },
  {
    id: '4',
    title: 'Tidur',
    image: require('../assets/tidur.png'), // Ganti dengan gambar sebenarnya
    sound: 'tidur.mp3',
  },
  {
    id: '5',
    title: 'Sakit',
    image: require('../assets/sakit.png'), // Ganti dengan gambar sebenarnya
    sound: 'sakit.mp3',
  },
  {
    id: '6',
    title: 'Main',
    image: require('../assets/main.png'), // Ganti dengan gambar sebenarnya
    sound: 'main.mp3',
  },
  // Tambahkan item komunikasi lainnya sesuai kebutuhan
];

const CommunicationScreen = ({ navigation }) => {
  const handleCommunicationPress = (item) => {
    // Di sini Anda bisa menambahkan logika untuk memutar suara
    // atau memperbesar gambar yang dipilih
    console.log(`Selected: ${item.title}`);
    
    // Contoh fungsi untuk memutar suara (perlu library tambahan)
    // playSound(item.sound);
  };

  const renderCommunicationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleCommunicationPress(item)}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Komunikasi Visual</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Logout')}
        >
          <Text style={styles.settingsButtonText}>Pengaturan</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={communicationItems}
        renderItem={renderCommunicationItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const itemWidth = (windowWidth - 60) / 2; // 60 = padding (20) * 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4361EE',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  settingsButton: {
    padding: 8,
    backgroundColor: '#3046C7',
    borderRadius: 8,
  },
  settingsButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    width: itemWidth,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemImage: {
    width: itemWidth - 30, // 30 = padding (15) * 2
    height: itemWidth - 30,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CommunicationScreen;