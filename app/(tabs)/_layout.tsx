import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';

// Tahan splash screen sampai aplikasi siap
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // Anda bisa menambahkan font custom di sini jika diperlukan
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Sembunyikan splash screen ketika font sudah di-load
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F49BAB',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Beranda',
            tabBarIcon: ({ color }) => (
              <View style={{ width: 24, height: 24, backgroundColor: color, borderRadius: 12 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="communication"
          options={{
            title: 'Komunikasi',
            tabBarIcon: ({ color }) => (
              <View style={{ width: 24, height: 24, backgroundColor: color, borderRadius: 4 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Pengaturan',
            tabBarIcon: ({ color }) => (
              <View style={{ width: 24, height: 24, backgroundColor: color, borderRadius: 8, transform: [{ rotate: '45deg' }] }} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}