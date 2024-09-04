import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text,  View } from 'react-native';
import Leitor from './pages/Leitor';
import Home from './pages/Home';

export default function App() {
const stackNavigation = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
       <stackNavigation.Navigator>
          <stackNavigation.Screen name='Home' component={Home}/>
          <stackNavigation.Screen name='Leitor' component={Leitor}/>
       </stackNavigation.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});  
