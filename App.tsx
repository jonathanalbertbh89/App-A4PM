import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes/routes';

import {AuthProvider} from './src/context/auth_context'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
        <StatusBar/>
      </AuthProvider>
      
      
    </NavigationContainer>
    
  );
}


