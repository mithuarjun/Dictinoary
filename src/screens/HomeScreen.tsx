// ─── Home Screen ──────────────────────────────────────────────────────────────

import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/useTheme';
import { SearchBar } from '../components/SearchBar';
import { WordChip } from '../components/WordChip';
import { SectionHeader } from '../components/SectionHeader';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { historyRepository } from '../repositories/HistoryRepository';
import { dictionaryRepository } from '../repositories/DictionaryRepository';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Word } from '../types';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

interface ExploreCard {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  description: string;
  color: string;
  route: keyof RootStackParamList;
}

export function HomeScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<HomeNavProp>();
  const { width } = useWindowDimensions();

  const [searchText, setSearchText] = useState('');
  const [recentWords, setRecentWords] = useState<Word[]>([]);
  const [wordOfDay, setWordOfDay] = useState<Word | null>(null);

  const contentWidth = Math.min(width, maxContentWidth);

  const loadData = useCallback(async () => {
    try {
      const [history, wotd] = await Promise.all([
        historyRepository.getHistory(),
        dictionaryRepository.getWordOfDay(),
      ]);
      setRecentWords(history.slice(0, 8).map((h) => h.word));
      setWordOfDay(wotd);
    } catch (err) {
      console.error('[HomeScreen] loadData error:', err);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Reload when returning to screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadData);
    return unsubscribe;
  }, [navigation, loadData]);

  const handleSearch = useCallback(() => {
    if (searchText.trim()) {
      navigation.navigate('SearchResults', { query: searchText.trim() });
    }
  }, [searchText, navigation]);

  const handleChipPress = useCallback(
    (word: string) => {
      navigation.navigate('SearchResults', { query: word });
    },
    [navigation]
  );

  const exploreCards: ExploreCard[] = [
    {
      id: 'favorites',
      icon: 'star',
      label: 'Favorites',
      description: 'Saved words',
      color: '#FFB300',
      route: 'Favorites',
    },
    {
      id: 'history',
      icon: 'time',
      label: 'History',
      description: 'Recent searches',
      color: '#5C6BC0',
      route: 'History',
    },
    {
      id: 'wotd',
      icon: 'sunny',
      label: 'Word of Day',
      description: "Today's word",
      color: '#43A047',
      route: 'WordOfDay',
    },
  ];

  return (
    <ThemedView variant="background" style={styles.flex}>
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: spacing['10'] },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Center content on tablets */}
          <View style={[styles.inner, { maxWidth: contentWidth, alignSelf: 'center', width: '100%' }]}>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <ThemedText variant="title" style={styles.appTitle}>
                  Gem Dictionary
                </ThemedText>
                <ThemedText
                  variant="caption"
                  style={{ color: c.textSecondary, marginTop: 2 }}
                >
                  English → Hindi Offline Dictionary
                </ThemedText>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                style={[styles.settingsBtn, { backgroundColor: c.surfaceVariant }]}
                accessibilityLabel="Open settings"
                accessibilityRole="button"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="settings-outline" size={22} color={c.textSecondary} />
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchSection}>
              <SearchBar
                value={searchText}
                onChangeText={setSearchText}
                onSubmit={handleSearch}
                onClear={() => setSearchText('')}
              />
            </View>

            {/* Word of the Day Banner */}
            {wordOfDay && (
              <TouchableOpacity
                style={[
                  styles.wotdBanner,
                  { backgroundColor: c.primary },
                  shadow.md,
                ]}
                onPress={() => navigation.navigate('WordOfDay')}
                activeOpacity={0.85}
                accessibilityRole="button"
                accessibilityLabel={`Word of the Day: ${wordOfDay.word}`}
              >
                <View style={styles.wotdLeft}>
                  <ThemedText
                    style={[styles.wotdLabel, { color: 'rgba(255,255,255,0.75)' }]}
                  >
                    ☀️  Word of the Day
                  </ThemedText>
                  <ThemedText
                    style={[styles.wotdWord, { color: '#fff' }]}
                  >
                    {wordOfDay.word}
                  </ThemedText>
                  <ThemedText
                    style={[styles.wotdHindi, { color: 'rgba(255,255,255,0.88)' }]}
                  >
                    {wordOfDay.meaningHindi}
                  </ThemedText>
                </View>
                <Ionicons name="chevron-forward" size={22} color="rgba(255,255,255,0.6)" />
              </TouchableOpacity>
            )}

            {/* Recent Words */}
            {recentWords.length > 0 && (
              <View style={styles.section}>
                <SectionHeader title="Recent Searches" />
                <View style={styles.chipRow}>
                  {recentWords.map((w) => (
                    <WordChip
                      key={w.id}
                      label={w.word}
                      onPress={() => handleChipPress(w.word)}
                    />
                  ))}
                </View>
              </View>
            )}

            {/* Explore */}
            <View style={styles.section}>
              <SectionHeader title="Explore" />
              <View style={styles.cardsRow}>
                {exploreCards.map((card) => (
                  <TouchableOpacity
                    key={card.id}
                    style={[
                      styles.exploreCard,
                      { backgroundColor: c.card, borderColor: c.border },
                      shadow.sm,
                    ]}
                    onPress={() => navigation.navigate(card.route as any)}
                    activeOpacity={0.8}
                    accessibilityRole="button"
                    accessibilityLabel={card.label}
                  >
                    <View
                      style={[
                        styles.cardIconBg,
                        { backgroundColor: card.color + '20' },
                      ]}
                    >
                      <Ionicons name={card.icon} size={26} color={card.color} />
                    </View>
                    <ThemedText
                      style={[styles.cardLabel, { color: c.text }]}
                      semiBold
                    >
                      {card.label}
                    </ThemedText>
                    <ThemedText
                      variant="caption"
                      style={{ color: c.textSecondary, fontSize: 11, marginTop: 2 }}
                    >
                      {card.description}
                    </ThemedText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Student Dictionary Banner */}
            <TouchableOpacity
              style={[
                styles.studentBanner,
                { backgroundColor: c.surface, borderColor: c.primary, borderWidth: 1.5 },
                shadow.md,
              ]}
              onPress={() => navigation.navigate('StudentDictionary')}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel="Open Student Dictionary"
            >
              <View style={[styles.studentIconBg, { backgroundColor: c.primary + '15' }]}>
                <Ionicons name="school" size={28} color={c.primary} />
              </View>
              <View style={styles.studentBannerText}>
                <ThemedText style={[styles.studentTitle, { color: c.text }]}>
                  Student Dictionary (Classes 1–10)
                </ThemedText>
                <ThemedText style={[styles.studentSub, { color: c.textSecondary }]}>
                  500+ Words • Science, Math, Exam Vocab & Phrases
                </ThemedText>
              </View>
              <Ionicons name="arrow-forward" size={20} color={c.primary} />
            </TouchableOpacity>

            {/* Offline badge */}
            <View style={styles.offlineBadge}>
              <Ionicons name="wifi-outline" size={14} color={c.textTertiary} />
              <ThemedText
                variant="caption"
                style={{ color: c.textTertiary, marginLeft: 6, fontSize: 12 }}
              >
                Works fully offline • 500+ student words • Ad-free
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scrollContent: {
    paddingHorizontal: spacing['5'],
    paddingTop: spacing['4'],
  },
  inner: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing['5'],
    marginTop: spacing['2'],
  },
  appTitle: {
    fontSize: 28,
    fontWeight: fontWeight.extraBold,
    letterSpacing: -0.5,
  },
  settingsBtn: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  searchSection: {
    marginBottom: spacing['5'],
  },
  wotdBanner: {
    borderRadius: borderRadius.xl,
    padding: spacing['5'],
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing['6'],
  },
  wotdLeft: { flex: 1 },
  wotdLabel: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semiBold,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  wotdWord: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.extraBold,
    letterSpacing: -0.5,
  },
  wotdHindi: {
    fontSize: fontSize.md,
    marginTop: 4,
  },
  section: {
    marginBottom: spacing['6'],
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardsRow: {
    flexDirection: 'row',
    gap: spacing['3'],
  },
  exploreCard: {
    flex: 1,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    padding: spacing['4'],
    alignItems: 'flex-start',
  },
  studentBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing['4'],
    borderRadius: borderRadius.xl,
    marginTop: spacing['2'],
    marginBottom: spacing['4'],
  },
  studentIconBg: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing['3'],
  },
  studentBannerText: {
    flex: 1,
  },
  studentTitle: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  studentSub: {
    fontSize: fontSize.xs,
    marginTop: 2,
  },
  cardIconBg: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing['3'],
  },
  cardLabel: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semiBold,
  },
  offlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing['4'],
    paddingVertical: spacing['3'],
  },
});
