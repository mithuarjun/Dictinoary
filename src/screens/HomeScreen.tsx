// ─── Home Screen (Modern Minimalist Dictionary) ─────────────────────────────

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
      setRecentHistory(history.slice(0, 8));
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
      <SafeAreaView
        style={[styles.flex, { paddingTop: Platform.OS === 'android' ? 12 : 0 }]}
        edges={['top', 'left', 'right']}
      >
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
                <ThemedText style={[styles.appTitle, { color: c.primary }]}>
                  Gem Dictionary
                </ThemedText>
                <ThemedText style={[styles.appSubtitle, { color: c.textSecondary }]}>
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
                <Ionicons name="settings-outline" size={18} color={c.textSecondary} />
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
                <ThemedText style={[styles.sectionHeading, { color: c.textSecondary }]}>
                  Recent Searches
                </ThemedText>

                {recentHistory.length > 0 && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('History')}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    accessibilityRole="button"
                    accessibilityLabel="View all search history"
                  >
                    <ThemedText style={[styles.viewAllText, { color: c.primary }]}>
                      View All
                    </ThemedText>
                  </TouchableOpacity>
                )}
              </View>

              {recentHistory.length > 0 ? (
                <View style={styles.chipsWrap}>
                  {recentHistory.map((item) => {
                    const cleanMeaning = formatTopHindiMeanings(item.word.meaningHindi, 1);
                    return (
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
                          size={13}
                          color={c.primary}
                          style={{ marginRight: 5 }}
                        />
                        <ThemedText
                          style={[styles.chipText, { color: c.text }]}
                          numberOfLines={1}
                          semiBold
                        >
                          {item.word.word}
                        </ThemedText>
                        {cleanMeaning ? (
                          <ThemedText
                            style={[styles.chipHindi, { color: c.textTertiary }]}
                            numberOfLines={1}
                          >
                            • {cleanMeaning}
                          </ThemedText>
                        ) : null}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : (
                <View style={[styles.emptyRecentBox, { backgroundColor: c.surfaceVariant + '50', borderColor: c.border }]}>
                  <Ionicons name="search-outline" size={20} color={c.textTertiary} />
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
                <Ionicons name="time" size={18} color={c.primary} />
              </View>
              <View style={styles.quickAccessContent}>
                <ThemedText style={[styles.quickAccessTitle, { color: c.text }]} semiBold>
                  Full Search History
                </ThemedText>
                <ThemedText style={[styles.quickAccessSubtitle, { color: c.textSecondary }]}>
                  Review previously looked up words & definitions
                </ThemedText>
              </View>
              <Ionicons name="chevron-forward" size={16} color={c.textTertiary} />
            </TouchableOpacity>

            {/* Offline Badge Footer */}
            <View style={styles.offlineFooter}>
              <View style={[styles.offlineDot, { backgroundColor: '#10B981' }]} />
              <Ionicons name="shield-checkmark" size={13} color={c.textTertiary} style={{ marginRight: 4 }} />
              <ThemedText style={[styles.offlineText, { color: c.textTertiary }]}>
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
    paddingHorizontal: spacing['4'],
    paddingTop: spacing['2'],
  },
  inner: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing['4'],
    marginTop: spacing['1'],
  },
  titleContainer: {
    flex: 1,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: fontWeight.extraBold,
    letterSpacing: -0.4,
    lineHeight: 28,
  },
  appSubtitle: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: fontWeight.regular,
    lineHeight: 16,
  },
  settingsBtn: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    marginBottom: spacing['4'],
  },
  section: {
    marginBottom: spacing['4'],
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing['2'],
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: fontWeight.bold,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    lineHeight: 15,
  },
  viewAllText: {
    fontSize: 12,
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
    paddingVertical: 6,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    maxWidth: '100%',
  },
  chipText: {
    fontSize: 13,
    lineHeight: 18,
  },
  chipHindi: {
    fontSize: 11,
    lineHeight: 16,
    marginLeft: 3,
    maxWidth: 90,
  },
  emptyRecentBox: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    paddingVertical: spacing['4'],
    paddingHorizontal: spacing['3'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyRecentText: {
    fontSize: 13,
    fontWeight: fontWeight.semiBold,
    marginTop: spacing['1'],
  },
  emptyRecentSub: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 2,
  },
  quickAccessCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing['3'],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    marginBottom: spacing['4'],
  },
  quickAccessIcon: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing['3'],
  },
  quickAccessContent: {
    flex: 1,
  },
  quickAccessTitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  quickAccessSubtitle: {
    fontSize: 11,
    lineHeight: 15,
    marginTop: 1,
  },
  offlineFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['1'],
  },
  offlineDot: {
    width: 6,
    height: 6,
    borderRadius: borderRadius.full,
    marginRight: 6,
  },
  offlineText: {
    fontSize: 11,
    fontWeight: fontWeight.medium,
  },
});
