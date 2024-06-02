import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreens/ProfileScreen';
import BookingScreen from '../Screens/BookingScreens/BookingScreen';

const Tab = createBottomTabNavigator(); 

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Booking" component={BookingScreen } />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})