import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import FileUpload from './src/screens/FileUpload';
import SignUp from './src/screens/SignUp';

import ToastManager from './src/com/ToastManager';
import Practice from './src/screens/Practice';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ToastManager />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1fbca9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="FileUpload"
          component={FileUpload}
          options={{
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerBackVisible: false, gestureEnabled: false}}
        />
        <Stack.Screen name="Practice" component={Practice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
