import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import AppNav from './Navigation/AppNav'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppProvider } from './context/AppContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade' }}
        // initialRouteName="Splash" // Set initial route
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          <Stack.Screen name="AppNav" component={AppNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})