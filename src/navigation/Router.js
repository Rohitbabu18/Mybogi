import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BottomTabNavigator from '../bottom_navigation';
import MyBogiPrime from '../screens/MyBogiPrime';
import MyCard from '../screens/MyCard';
import NotificationMessages from '../screens/Notification';
import MyOrders from '../screens/MyOrders';
import Wallet from '../screens/Wallet';
import Account from '../screens/Account';
import CustomerService from '../screens/CustomerService/Index';
import Guide from '../screens/Guide';
import AllOffers from '../screens/AllOffers';
import ViewAll from '../screens/ViewAll';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Notification" component={NotificationMessages} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="MyBogiPrime" component={MyBogiPrime} />

      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="MyOrder" component={MyOrders} />
      <Stack.Screen name="AllOffers" component={AllOffers} />

      <Stack.Screen name="Account" component={Account} />

      <Stack.Screen name="ViewAll" component={ViewAll} />
      <Stack.Screen name="CustomerService" component={CustomerService} />
      <Stack.Screen name="Guide" component={Guide} />
    </Stack.Navigator>
  );
};

export default Router;

// const HomeTab = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>

//     </Stack.Navigator>
//   )
// }