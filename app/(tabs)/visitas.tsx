import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { colors } from '../../src/theme/colors';

const METADADOS = [
  { label: 'Latitude', value: '-21.1785' },
  { label: 'Longitude', value: '-47.8164' },
  { label: 'Altitude', value: '621m' },
] as const;

export default function VisitasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="arrow-back" size={18} color={colors.primaryDark} />
          </View>
          <View style={styles.headerCopy}>
            <Text style={styles.title}>Registrar Visita</Text>
            <Text style={styles.subtitle}>Fazenda Santa Clara</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={18} color={colors.primaryDark} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DADOS DA VISITA</Text>
          <View style={styles.grid}>
            <View style={styles.infoCardLarge}>
              <Text style={styles.infoLabel}>Propriedade</Text>
              <Text style={styles.infoValue}>Faz. Santa Clara</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Instrutor</Text>
              <Text style={styles.infoValue}>Joao Silva</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Data</Text>
              <Text style={styles.infoValue}>24/05/2025</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Hora</Text>
              <Text style={styles.infoValue}>09:41</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>UPLOAD DE FOTO</Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.uploadCard}>
            <View style={styles.uploadIconWrap}>
              <Ionicons name="folder-open-outline" size={34} color={colors.warning} />
            </View>
            <Text style={styles.uploadTitle}>Selecionar Foto</Text>
            <Text style={styles.uploadSubtitle}>
              JPEG, PNG, HEIC - metadados GPS serao lidos automaticamente
            </Text>
            <View style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Escolher Arquivo</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.geoHeader}>
            <View>
              <Text style={styles.geoTitle}>Geolocalizacao Extraida</Text>
              <Text style={styles.geoSubtitle}>Metadados OK</Text>
            </View>
            <View style={styles.geoBadge}>
              <Ionicons name="checkmark-circle" size={16} color={colors.success} />
              <Text style={styles.geoBadgeText}>Metadados OK</Text>
            </View>
          </View>

          <View style={styles.metadataRow}>
            {METADADOS.map((item) => (
              <View key={item.label} style={styles.metadataCard}>
                <Text style={styles.metadataLabel}>{item.label}</Text>
                <Text style={styles.metadataValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.mapCard}>
            <View style={styles.mapGrid}>
              {Array.from({ length: 24 }).map((_, index) => (
                <View key={index} style={styles.mapSquare} />
              ))}
            </View>
            <View style={styles.mapPin}>
              <Ionicons name="location" size={24} color={colors.danger} />
            </View>
            <View style={styles.mapLegend}>
              <Text style={styles.mapLegendText}>Distancia estimada: 87m da propriedade</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.92}
          style={styles.primaryButton}
          onPress={() => router.push('/avaliador')}>
          <Text style={styles.primaryButtonText}>Enviar para Analise</Text>
          <Ionicons name="arrow-forward" size={18} color={colors.textLight} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  headerIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E2F0E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerCopy: {
    flex: 1,
  },
  title: {
    color: colors.textDark,
    fontSize: 29,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 13,
  },
  moreButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#0B1E17',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 2,
  },
  sectionTitle: {
    color: '#979289',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  infoCardLarge: {
    width: '48%',
    backgroundColor: '#FAF7F1',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EADFCB',
    minHeight: 82,
  },
  infoCard: {
    width: '48%',
    backgroundColor: '#FAF7F1',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EADFCB',
    minHeight: 82,
  },
  infoLabel: {
    color: '#A3A096',
    fontSize: 11,
    marginBottom: 8,
  },
  infoValue: {
    color: colors.textDark,
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '700',
  },
  uploadCard: {
    borderWidth: 2,
    borderColor: '#70C995',
    borderStyle: 'dashed',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#EAF7EE',
  },
  uploadIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: '#DDF3E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  uploadTitle: {
    color: colors.textDark,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  uploadSubtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  uploadButton: {
    borderRadius: 999,
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  uploadButtonText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '700',
  },
  geoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  geoTitle: {
    color: colors.textDark,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  geoSubtitle: {
    color: colors.textMuted,
    fontSize: 12,
  },
  geoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#E4F6EB',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
  },
  geoBadgeText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: '700',
  },
  metadataRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  metadataCard: {
    flex: 1,
    backgroundColor: '#E8F4E9',
    borderRadius: 14,
    padding: 10,
  },
  metadataLabel: {
    color: '#75917B',
    fontSize: 11,
    marginBottom: 4,
  },
  metadataValue: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '800',
  },
  mapCard: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#E6F0E5',
    borderWidth: 1,
    borderColor: '#D3E1D2',
  },
  mapGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    opacity: 0.55,
  },
  mapSquare: {
    width: '16.66%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: '#C9D8C7',
  },
  mapPin: {
    position: 'absolute',
    top: '44%',
    left: '50%',
    marginLeft: -12,
    marginTop: -18,
  },
  mapLegend: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  mapLegendText: {
    color: colors.textDark,
    fontSize: 12,
    fontWeight: '600',
  },
  primaryButton: {
    marginTop: 6,
    backgroundColor: colors.primaryDark,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primaryButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '800',
  },
});
