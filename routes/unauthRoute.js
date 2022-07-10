import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';

const Stack = createStackNavigator();

export default function UnAuthRoute() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}