import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Router from './Router';
import DrawerContent from './DrawerContent';
import { horizScale } from '../utils/Layout';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator

      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: horizScale(300),
        },
        drawerType: 'frunt',
        overlayColor: 'transparent',
        // drawerItemStyle: {
        //   height: 200,
        //   backgroundColor: 'red'
        // }

      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Router" component={Router} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
