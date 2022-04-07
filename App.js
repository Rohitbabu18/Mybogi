import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import Splash from './src/screens/Auth/Splash';
import DrawerNav from './src/navigation/DrawerNav';
import ExploreBhandaraStore from './src/screens/Auth/ExploreBhandaraStore';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="ExploreBhandaraStore"
        component={ExploreBhandaraStore}
      />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Drawer" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
