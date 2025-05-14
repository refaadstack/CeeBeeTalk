import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/icon.jpg')} 
          style={styles.logo}
          // Fallback untuk ketika gambar belum ada
          onError={(e) => console.log('Image not found, please add icon.jpg to assets folder')}
        />
        
        <Text style={styles.title}>CeeBee Talk</Text>
        <Text style={styles.subtitle}>Alat Bantu Komunikasi untuk Anak Berkebutuhan Khusus</Text>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Dukungan suara otomatis</Text>
            <Text style={styles.featureDesc}>Ketika simbol disentuh, langsung mengeluarkan suara, membantu anak berkomunikasi dengan lebih mudah dan dipahami orang lain</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Mudah Digunakan</Text>
            <Text style={styles.featureDesc}>Sederhana dan intuitif, cocok untuk anak CP dengan hambatan motorik dan kognitif ringan hingga sedang</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Offline dan Online</Text>
            <Text style={styles.featureDesc}>Dapat digunakan dimana saja dan kapan saja</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={() => router.push('/(tabs)/communication')}
        >
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    marginTop:60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F49BAB',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  featureDesc: {
    textAlign:'center',
    fontSize: 14,
    color: '#666',
  },
  startButton: {
    backgroundColor: '#F49BAB',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#9B7EBD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginTop:-40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});