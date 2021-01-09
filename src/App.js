import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginSreen';
import RegistrationScreen from './screens/RegistrationScreen';

import {BookDetail} from './screens/';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        {/* Tabs */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          screenOptions={{
            headerShown: false,
          }}></Stack.Screen>

        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}></Stack.Screen>

        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
