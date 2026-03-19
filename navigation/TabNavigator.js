import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../src/theme/colors';

// Importações temporárias (criaremos essas telas depois)
import { View, Text } from 'react-native';
const PlaceholderScreen = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{title}</Text></View>
);
const DashboardScreen = () => <PlaceholderScreen title="Dashboard (Início)" />;
const VisitasScreen = () => <PlaceholderScreen title="Visitas" />;
const RelatoriosScreen = () => <PlaceholderScreen title="Relatórios" />;
const PerfilScreen = () => <PlaceholderScreen title="Perfil" />;

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primaryLight,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Visitas') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Relatórios') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={DashboardScreen} />
      <Tab.Screen name="Visitas" component={VisitasScreen} />
      <Tab.Screen name="Relatórios" component={RelatoriosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}