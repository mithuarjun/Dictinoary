// ─── Home Screen (Modern Minimalist Dictionary) ─────────────────────────────

import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/useTheme';
import { SearchBar } from '../components/SearchBar';
import { SectionHeader } from '../components/SectionHeader';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { historyRepository } from '../repositories/HistoryRepository';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { RootStackParamList } from '../navigation/AppNavigator';
import { SearchHistoryEntry } from '../types';
import { formatTopHindiMeanings } from '../utils/formatDictionaryMeanings';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<HomeNavProp>();
  const { width } = useWindowDimensions();

  const [searchText, setSearchText] = useState('');
  const [recentHistory, setRecentHistory] = useState<SearchHistoryEntry[]>([]);

  const contentWidth = Math.min(width, maxContentWidth);

  const loadRecentHistory = useCallback(async () => {
    try {
      const history = await historyRepository.getHistory();
      setRecentHistory(history.slice(0, 10));
    } catch (err) {
      console.error('[HomeScreen] loadRecentHistory error:', err);
    }
  }, []);

  useEffect(() => {
    loadRecentHistory();
  }, [loadRecentHistory]);

  // Reload when screen gains focus
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadRecentHistory);
    return unsubscribe;
  }, [navigation, loadRecentHistory]);

  const handleSearch = useCallback(() => {
    if (searchText.trim()) {
      navigation.navigate('SearchResults', { query: searchText.trim() });
    }
  }, [searchText, navigation]);

  const handleWordSelect = useCallback(
    (wordId: number, wordText: string) => {
      navigation.navigate('WordDetail', { wordId, word: wordText });
    },
    [navigation]
  );

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
            { paddingBottom: spacing['12'] },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.inner, { maxWidth: contentWidth, alignSelf: 'center', width: '100%' }]}>
            {/* Header / Branding */}
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                <ThemedText variant="title" style={[styles.appTitle, { color: c.primary }]}>
                  Gem Dictionary
                </ThemedText>
                <ThemedText
                  variant="caption"
                  style={[styles.appSubtitle, { color: c.textSecondary }]}
                >
                  English → Hindi Offline Dictionary
                </ThemedText>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                style={[styles.settingsBtn, { backgroundColor: c.surfaceVariant, borderColor: c.border }]}
                accessibilityLabel="Open settings"
                accessibilityRole="button"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="settings-outline" size={20} color={c.textSecondary} />
              </TouchableOpacity>
            </View>

            {/* Search Bar Section */}
            <View style={styles.searchSection}>
              <SearchBar
                value={searchText}
                onChangeText={setSearchText}
                onSubmit={handleSearch}
                onClear={() => setSearchText('')}
                placeholder="Search an English word..."
              />
            </View>

            {/* Recent Searches */}
            <View style={styles.section}>
              <View style={styles.sectionHeaderRow}>
                <ThemedText
                  variant="label"
                  style={[styles.sectionHeading, { color: c.textSecondary }]}
                >
                  Recent Searches
                </ThemedText>

                {recentHistory.length > 0 && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('History')}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    accessibilityRole="button"
                    accessibilityLabel="View all search history"
                  >
                    <ThemedText
                      style={[styles.viewAllText, { color: c.primary }]}
                    >
                      View All
                    </ThemedText>
                  </TouchableOpacity>
                )}
              </View>

              {recentHistory.length > 0 ? (
                <View style={styles.chipsWrap}>
                  {recentHistory.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        styles.chip,
                        {
                          backgroundColor: c.card,
                          borderColor: c.border,
                        },
                        shadow.sm,
                      ]}
                      onPress={() => handleWordSelect(item.wordId, item.word.word)}
                      activeOpacity={0.7}
                      accessibilityRole="button"
                      accessibilityLabel={`Recent word: ${item.word.word}`}
                    >
                      <Ionicons
                        name="time-outline"
                        size={14}
                        color={c.primary}
                        style={{ marginRight: 6 }}
                      />
                      <ThemedText
                        style={[styles.chipText, { color: c.text }]}
                        semiBold
                      >
                        {item.word.word}
                      </ThemedText>
                      {item.word.meaningHindi ? (
                        <ThemedText
                          style={[styles.chipHindi, { color: c.textTertiary }]}
                          numberOfLines={1}
                        >
                          • {formatTopHindiMeanings(item.word.meaningHindi, 1)}
                        </ThemedText>
                      ) : null}
                    </TouchableOpacity>
                  ))}
                </View>
              ) : (
                <View style={[styles.emptyRecentBox, { backgroundColor: c.surfaceVariant + '60', borderColor: c.border }]}>
                  <Ionicons name="search-outline" size={24} color={c.textTertiary} />
                  <ThemedText style={[styles.emptyRecentText, { color: c.textSecondary }]}>
                    No recent searches
                  </ThemedText>
                  <ThemedText style={[styles.emptyRecentSub, { color: c.textTertiary }]}>
                    Search for words above to quickly access them here.
                  </ThemedText>
                </View>
              )}
            </View>

            {/* Quick Access Card: Search History */}
            <TouchableOpacity
              style={[
                styles.quickAccessCard,
                { backgroundColor: c.card, borderColor: c.border },
                shadow.sm,
              ]}
              onPress={() => navigation.navigate('History')}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel="Open Search History"
            >
              <View style={[styles.quickAccessIcon, { backgroundColor: c.primary + '15' }]}>
                <Ionicons name="time" size={22} color={c.primary} />
              </View>
              <View style={styles.quickAccessContent}>
                <ThemedText style={[styles.quickAccessTitle, { color: c.text }]} semiBold>
                  Full Search History
                </ThemedText>
                <ThemedText style={[styles.quickAccessSubtitle, { color: c.textSecondary }]}>
                  Review previously looked up words & definitions
                </ThemedText>
              </View>
              <Ionicons name="chevron-forward" size={18} color={c.textTertiary} />
            </TouchableOpacity>

            {/* Offline Badge Footer */}
            <View style={styles.offlineFooter}>
              <View style={[styles.offlineDot, { backgroundColor: '#10B981' }]} />
              <Ionicons name="shield-checkmark" size={14} color={c.textTertiary} style={{ marginRight: 4 }} />
              <ThemedText
                variant="caption"
                style={[styles.offlineText, { color: c.textTertiary }]}
              >
                100% Offline • 65,000+ Words • Ad-Free
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

export default HomeScreen;

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
    alignItems: 'center',
    marginBottom: spacing['5'],
    marginTop: spacing['2'],
  },
  titleContainer: {
    flex: 1,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: fontWeight.extraBold,
    letterSpacing: -0.6,
  },
  appSubtitle: {
    fontSize: fontSize.sm,
    marginTop: 2,
    fontWeight: fontWeight.medium,
  },
  settingsBtn: {
    width: 42,
    height: 42,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    marginBottom: spacing['6'],
  },
  section: {
    marginBottom: spacing['6'],
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing['3'],
  },
  sectionHeading: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  viewAllText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semiBold,
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing['2'],
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing['3'],
    paddingVertical: spacing['2'],
    borderRadius: borderRadius.full,
    borderWidth: 1,
    maxWidth: '100%',
  },
  chipText: {
    fontSize: fontSize.sm,
  },
  chipHindi: {
    fontSize: fontSize.xs,
    marginLeft: 4,
    maxWidth: 120,
  },
  emptyRecentBox: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    paddingVertical: spacing['6'],
    paddingHorizontal: spacing['4'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyRecentText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semiBold,
    marginTop: spacing['2'],
  },
  emptyRecentSub: {
    fontSize: fontSize.xs,
    textAlign: 'center',
    marginTop: 2,
  },
  quickAccessCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing['4'],
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    marginBottom: spacing['6'],
  },
  quickAccessIcon: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing['3'],
  },
  quickAccessContent: {
    flex: 1,
  },
  quickAccessTitle: {
    fontSize: fontSize.md,
  },
  quickAccessSubtitle: {
    fontSize: fontSize.xs,
    marginTop: 2,
  },
  offlineFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['2'],
  },
  offlineDot: {
    width: 6,
    height: 6,
    borderRadius: borderRadius.full,
    marginRight: 6,
  },
  offlineText: {
    fontSize: 12,
    fontWeight: fontWeight.medium,
  },
});
