import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreens/ProfileScreen';
import BookingScreen from '../Screens/BookingScreens/BookingScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} /> // Use color parameter
          )
        }} />
      <Tab.Screen name="Booking" component={BookingScreen} options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="bookmark" size={24} color={color} /> // Use color parameter
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle" size={24} color={color} /> // Use color parameter
        )
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
