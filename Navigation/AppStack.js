import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../screens/Chat';
import File from '../screens/File';
import Calender from '../screens/Calender';
import Home from '../screens/Home';
import { s, vs } from 'react-native-size-matters';
import { CalenderIcon, CalenderTabIcon, ChatIcon, FileIcon, HomeIcon } from '../Assets/svg/icons';
import { BRAND } from '../constants/color';

const Tabs = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#D9D9D9',
          borderTopLeftRadius: s(18),
          borderTopRightRadius: s(18),
          height: vs(70),

          paddingVertical: vs(10),
        },
        tabBarActiveTintColor: '#47C2C4',
        tabBarInactiveTintColor: '#3B3B3B',
        // This hides the labels
        tabBarShowLabel: false,
        // Center align the icons vertically and horizontally
        tabBarItemStyle: {

          alignSelf: "center",
          marginTop: vs(15),

        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconContainer}>
            <HomeIcon width={size} height={size} stroke={color} fill={color} />
          </View>
        ),
      }} />
      <Tabs.Screen name="Calender" component={Calender} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconContainer}>
            <CalenderTabIcon width={size} height={size} stroke={color} fill={color} />
          </View>
        ),
      }} />
      <Tabs.Screen name="File" component={File} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconContainer}>
            <FileIcon width={size} height={size} stroke={color} fill={color} />
          </View>
        ),
      }} />

      <Tabs.Screen name="Chat" component={Chat} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconContainer}>
            <ChatIcon width={size} height={size} stroke={color} fill={color} />
          </View>
        ),
      }} />
    </Tabs.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({
  iconContainer: {
    // This ensures the icon is centered within its container
    justifyContent: 'center',
    alignItems: 'center',
    // You can adjust this value to fine-tune vertical positioning
    marginTop: vs(5),
  }
})