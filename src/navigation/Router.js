import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BottomTabNavigator from '../bottom_navigation';
import MyBogiPrime from '../screens/MyBogiPrime';
import MyCard from '../screens/MyCard';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="MyBogiPrime" component={MyBogiPrime} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
