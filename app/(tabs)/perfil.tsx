import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../src/theme/colors';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.subtitle}>
          Espaco reservado para dados do instrutor, configuracoes e preferencias do app.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
  },
  title: {
    color: colors.textDark,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
