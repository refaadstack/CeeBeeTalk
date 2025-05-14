import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';

import CommunicationScreen from '../screens/CommunicationScreen';
import LandingScreen from '../screens/LandingScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        setIsLoggedIn(userToken !== null);
      } catch (e) {
        console.log('Failed to fetch the login status');
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return null; // Or a loading screen
  }

  return (
    <Stack.Navigator 
      initialRouteName={isLoggedIn ? 'Communication' : 'Landing'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Communication" component={CommunicationScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;