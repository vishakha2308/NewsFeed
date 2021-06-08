import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/Screens/Home'
import News from '../src/Screens/News';
const Stack = createStackNavigator();

export default function MyStack (){
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
         <Stack.Screen
          name="Home"
          component={Home}
        />        
         <Stack.Screen name="News" component={News} />      
         </Stack.Navigator>
    </NavigationContainer>
  );
}