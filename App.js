import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackNav from './StackNav'

export default function App() {
  return (
    <NavigationContainer>
     <StackNav/>
    </NavigationContainer>
  );
}
