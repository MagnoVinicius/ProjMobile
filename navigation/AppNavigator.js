import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas e o TabNavigator
import LoginScreen from '../screens/Login'; // Aquela que criamos na etapa anterior
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela inicial de autenticação */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Fluxo principal do app após o login */}
        <Stack.Screen name="Main" component={TabNavigator} />
        
        {/* Espaço para telas que cobrem o menu de abas (ex: Câmera, Avaliador) */}
        {/* <Stack.Screen name="RegistrarVisita" component={RegistrarVisitaScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}