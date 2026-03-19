import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../src/theme/colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />
      
      <View style={styles.content}>
        {/* Logo e Título */}
        <View style={styles.header}>
          <Ionicons name="leaf" size={40} color={colors.primaryLight} />
          <Text style={styles.logoText}>CampoApp</Text>
        </View>

        <Text style={styles.welcomeText}>Bem-vindo,</Text>
        <Text style={styles.titleText}>Instrutor de Campo</Text>
        <Text style={styles.subtitleText}>Acesse sua conta para continuar</Text>

        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.label}>E-MAIL</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color={colors.primaryLight} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="joao@exemplo.com"
              placeholderTextColor={colors.textMuted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>SENHA</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.primaryLight} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={colors.textMuted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar no Sistema</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textLight,
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 28,
    color: colors.textLight,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#152F22', // Um tom um pouco mais escuro que o fundo
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#244D3A',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: colors.textLight,
  },
  forgotPassword: {
    color: colors.primaryLight,
    textAlign: 'right',
    marginBottom: 24,
    fontSize: 14,
  },
  button: {
    backgroundColor: colors.primaryLight,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
});