import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MyTeam from '../screens/MyTeam';
import Categories from '../screens/Categories';
import LocalVendor from '../screens/LocalVendor';
import MyOffer from '../screens/MyOffer';
import { AppColor } from '../utils/AppColor';
import { View, Image, Text } from 'react-native';
import MyTabBar from './MyTabs';
import CustomImage from '../utils/Images';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerStyle: {
          flex: 1,
          height: 90,
          padding: 5,
          marginBottom: 5,
          justifyContent: 'space-evenly',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarActiveTintColor: AppColor.pink,
          tabBarInactiveTintColor: AppColor.black,
          tabBarIcon: CustomImage.home
        }}
      />
      <Tab.Screen
        name="MyTeam"
        component={MyTeam}
        options={{
          tabBarIcon: CustomImage.MyTeam,
          headerShown: false,
          tabBarLabel: 'MyTeam',
          tabBarActiveTintColor: AppColor.pink,
          tabBarInactiveTintColor: AppColor.black,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
          tabBarActiveTintColor: AppColor.pink,
          tabBarInactiveTintColor: AppColor.black,
          tabBarIcon: CustomImage.Categories

        }}
      />
      <Tab.Screen
        name="LocalVendor"
        component={LocalVendor}
        options={{
          headerShown: false,
          tabBarLabel: 'LocalVendor',
          tabBarActiveTintColor: AppColor.pink,
          tabBarInactiveTintColor: AppColor.black,
          tabBarIcon: CustomImage.LocalVendor
        }}
      />
      <Tab.Screen
        name="MyOffer"
        component={MyOffer}
        options={{
          headerShown: false,
          tabBarLabel: 'MyOffer',
          tabBarActiveTintColor: AppColor.pink,
          tabBarInactiveTintColor: AppColor.black,
          tabBarIcon: CustomImage.MyOffer

        }}
      />
    </Tab.Navigator>
  );
}
