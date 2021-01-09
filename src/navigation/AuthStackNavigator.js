import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginSreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({params}) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen}></AuthStack.Screen>
      <AuthStack.Screen
        name="Registration"
        component={RegistrationScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
