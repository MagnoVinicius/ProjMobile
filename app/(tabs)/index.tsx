import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../src/theme/colors';

type StatusType = 'Agendada' | 'Hoje' | 'Em andamento' | 'Concluida';

type Propriedade = {
  id: string;
  nome: string;
  local: string;
  distancia: string;
  status: StatusType;
  visitaEm: string;
  icone: keyof typeof Ionicons.glyphMap;
  iconeBg: string;
};

const STATS = [
  { label: 'Atribuidas', value: '12', tone: 'dark' },
  { label: 'Hoje', value: '3', tone: 'light' },
  { label: 'Concluidas', value: '8', tone: 'green' },
] as const;

const PROPRIEDADES: Propriedade[] = [
  {
    id: '1',
    nome: 'Fazenda Santa Clara',
    local: 'Ribeirao Preto, SP',
    distancia: '12 km',
    status: 'Hoje',
    visitaEm: 'Hoje - 09:30',
    icone: 'leaf-outline',
    iconeBg: '#DFF6E8',
  },
  {
    id: '2',
    nome: 'Sitio Boa Esperanca',
    local: 'Bauru, SP',
    distancia: '38 km',
    status: 'Agendada',
    visitaEm: 'Amanha - 14:00',
    icone: 'paw-outline',
    iconeBg: '#EAF5DF',
  },
  {
    id: '3',
    nome: 'Chacara Vale Verde',
    local: 'Jau, SP',
    distancia: '55 km',
    status: 'Em andamento',
    visitaEm: '23/05 - 08:30',
    icone: 'nutrition-outline',
    iconeBg: '#F5F0D9',
  },
  {
    id: '4',
    nome: 'Rancho Ipe Amarelo',
    local: 'Lencois Paulista',
    distancia: '20 km',
    status: 'Concluida',
    visitaEm: '20/05 - 10:15',
    icone: 'flower-outline',
    iconeBg: '#F4EAD9',
  },
];

const getStatusStyle = (status: StatusType) => {
  switch (status) {
    case 'Hoje':
      return { bg: '#E3F3FF', text: '#2A84C9', dot: '#71C4F3' };
    case 'Agendada':
      return { bg: '#FFF4D9', text: '#C7921E', dot: '#F3B63F' };
    case 'Em andamento':
      return { bg: '#EAF2FF', text: '#5278D8', dot: '#6F96FF' };
    default:
      return { bg: '#E2F6E9', text: '#2EAF6D', dot: '#5DCF95' };
  }
};

export default function DashboardScreen() {
  const renderItem = ({ item }: { item: Propriedade }) => {
    const statusStyle = getStatusStyle(item.status);

    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: item.iconeBg }]}>
          <Ionicons name={item.icone} size={24} color={colors.primaryLight} />
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{item.nome}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location" size={12} color="#ED6B5F" />
            <Text style={styles.cardSubtitle}>
              {item.local} - {item.distancia}
            </Text>
          </View>
          <Text style={styles.visitDate}>Visita: {item.visitaEm}</Text>
          <View style={[styles.badge, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.badgeText, { color: statusStyle.text }]}>{item.status}</Text>
            <View style={[styles.badgeDot, { backgroundColor: statusStyle.dot }]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />

      <View style={styles.hero}>
        <View style={styles.heroOrb} />
        <View style={styles.heroTop}>
          <View>
            <Text style={styles.greeting}>Bom dia,</Text>
            <Text style={styles.userName}>Joao Silva</Text>
          </View>
          <TouchableOpacity activeOpacity={0.9} style={styles.avatar}>
            <Ionicons name="person" size={22} color={colors.textLight} />
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          {STATS.map((item) => (
            <View
              key={item.label}
              style={[
                styles.statBox,
                item.tone === 'dark' && styles.statBoxDark,
                item.tone === 'light' && styles.statBoxLight,
                item.tone === 'green' && styles.statBoxGreen,
              ]}>
              <Text
                style={[
                  styles.statNumber,
                  item.tone === 'light' && styles.statNumberDark,
                ]}>
                {item.value}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  item.tone === 'light' && styles.statLabelDark,
                ]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.sheet}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>PROPRIEDADES ATRIBUIDAS</Text>
            <Text style={styles.sectionDescription}>
              Proximas propriedades que voce precisa visitar
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.sectionAction}>
            <Text style={styles.sectionActionText}>Agenda</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={PROPRIEDADES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  hero: {
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 26,
    overflow: 'hidden',
  },
  heroOrb: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: 'rgba(88, 193, 142, 0.08)',
    top: -60,
    left: 40,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  greeting: {
    color: '#CFE3D8',
    fontSize: 13,
    marginBottom: 2,
  },
  userName: {
    color: colors.textLight,
    fontSize: 28,
    fontWeight: '800',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#A56B3F',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.14)',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statBox: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  statBoxDark: {
    backgroundColor: '#284D3B',
  },
  statBoxLight: {
    backgroundColor: '#F3EEDF',
  },
  statBoxGreen: {
    backgroundColor: '#2B6A4A',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textLight,
    marginBottom: 2,
  },
  statNumberDark: {
    color: colors.textDark,
  },
  statLabel: {
    fontSize: 12,
    color: '#CDE0D5',
  },
  statLabelDark: {
    color: colors.textMuted,
  },
  sheet: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  sectionEyebrow: {
    color: '#8B8E84',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  sectionDescription: {
    color: colors.textMuted,
    fontSize: 13,
  },
  sectionAction: {
    backgroundColor: colors.card,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  sectionActionText: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '700',
  },
  listContent: {
    paddingBottom: 110,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#0B1E17',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: colors.textDark,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '800',
    marginBottom: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  cardSubtitle: {
    color: colors.textMuted,
    fontSize: 13,
    flexShrink: 1,
  },
  visitDate: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 5,
    gap: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },
});
