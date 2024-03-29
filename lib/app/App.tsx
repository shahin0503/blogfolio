/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../view/splash/splash_screen';
import LoginScreen from '../view/auth/login_screen';
import SignupScreen from '../view/auth/signup_screen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name='Login' component={LoginScreen} options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name='Signup' component={SignupScreen} options={
          {
            headerShown: false
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
