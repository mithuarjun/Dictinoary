// ─── Student Dictionary Component ───────────────────────────────────────────────
// High-performance offline search component for 65,000+ words with audio pronunciation & favorites.

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { useTheme } from '../hooks/useTheme';
import { dictionaryRepository } from '../repositories/DictionaryRepository';
import { favoritesRepository } from '../repositories/FavoritesRepository';
import { historyRepository } from '../repositories/HistoryRepository';
import { ttsService } from '../services/TTSService';
import { Word } from '../types';
import { RootStackParamList } from '../navigation/AppNavigator';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface CategoryFilter {
  id: string;
  label: string;
  query: string;
}

const QUICK_FILTERS: CategoryFilter[] = [
  { id: 'all', label: '📚 All Words', query: '' },
  { id: 'daily', label: '🗣️ Essential', query: 'be' },
  { id: 'science', label: '🔬 Science', query: 'sci' },
  { id: 'math', label: '📐 Math', query: 'math' },
  { id: 'exam', label: '🎯 Exam Vocab', query: 'ex' },
];

export function StudentDictionary() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<NavProp>();
  const { width } = useWindowDimensions();
  const isTablet = width >= maxContentWidth;

  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [words, setWords] = useState<Word[]>([]);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set());

  // Load initial words
  const loadInitialWords = useCallback(async () => {
    setLoading(true);
    try {
      const initial = await dictionaryRepository.getAllWords(40);
      setWords(initial);

      // Load favorites
      const favs = await favoritesRepository.getAllFavorites();
      setFavoriteIds(new Set(favs.map((f) => f.wordId)));
    } catch (err) {
      console.error('[StudentDictionary] loadInitialWords error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialWords();
  }, [loadInitialWords]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      loadInitialWords();
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const results = await dictionaryRepository.searchWords(query.trim(), 40);
        setWords(results);
      } catch (err) {
        console.error('[StudentDictionary] search error:', err);
      } finally {
        setLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query, loadInitialWords]);

  const handleFilterSelect = useCallback(
    async (filter: CategoryFilter) => {
      setSelectedFilter(filter.id);
      if (!filter.query) {
        setQuery('');
        loadInitialWords();
      } else {
        setQuery(filter.query);
      }
    },
    [loadInitialWords]
  );

  const handleSpeak = useCallback((wordText: string) => {
    setIsSpeaking(true);
    ttsService.speak(
      wordText,
      () => setIsSpeaking(false),
      (msg) => {
        setIsSpeaking(false);
        if (Platform.OS !== 'web') {
          Alert.alert('Pronunciation', msg);
        }
      }
    );
  }, []);

  const handleToggleFavorite = useCallback(
    async (word: Word) => {
      try {
        const isFav = favoriteIds.has(word.id);
        if (isFav) {
          await favoritesRepository.removeFavorite(word.id);
          setFavoriteIds((prev) => {
            const next = new Set(prev);
            next.delete(word.id);
            return next;
          });
        } else {
          await favoritesRepository.addFavorite(word.id);
          setFavoriteIds((prev) => {
            const next = new Set(prev);
            next.add(word.id);
            return next;
          });
        }
      } catch (err) {
        console.error('[StudentDictionary] toggle favorite error:', err);
      }
    },
    [favoriteIds]
  );

  const handleOpenWord = useCallback(
    (word: Word) => {
      setSelectedWord(word);
      historyRepository.addToHistory(word.id).catch(() => {});
    },
    []
  );

  const renderWordCard = useCallback(
    ({ item }: { item: Word }) => {
      const isFav = favoriteIds.has(item.id);

      return (
        <TouchableOpacity
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.border },
            shadow.sm,
          ]}
          onPress={() => handleOpenWord(item)}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={`${item.word}: ${item.meaningHindi}`}
        >
          <View style={styles.cardHeader}>
            <View style={styles.wordTitleContainer}>
              <ThemedText style={[styles.wordTitle, { color: c.text }]}>
                {item.word}
              </ThemedText>
              {item.partOfSpeech ? (
                <View style={[styles.posBadge, { backgroundColor: c.surfaceVariant }]}>
                  <ThemedText style={[styles.posText, { color: c.textSecondary }]}>
                    {item.partOfSpeech}
                  </ThemedText>
                </View>
              ) : null}
            </View>

            <View style={styles.cardActions}>
              <TouchableOpacity
                onPress={() => handleSpeak(item.word)}
                style={[styles.miniActionBtn, { backgroundColor: c.primary + '15' }]}
                accessibilityLabel="Pronounce word"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="volume-high" size={16} color={c.primary} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleToggleFavorite(item)}
                style={[styles.miniActionBtn, { backgroundColor: isFav ? c.favoriteActive + '20' : c.surfaceVariant }]}
                accessibilityLabel="Favorite word"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons
                  name={isFav ? 'star' : 'star-outline'}
                  size={16}
                  color={isFav ? c.favoriteActive : c.textSecondary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ThemedText
            variant="hindi"
            style={[styles.cardHindi, { color: c.primary }]}
            numberOfLines={2}
          >
            {item.meaningHindi}
          </ThemedText>
        </TouchableOpacity>
      );
    },
    [c, favoriteIds, handleSpeak, handleToggleFavorite, handleOpenWord]
  );

  return (
    <ThemedView variant="background" style={styles.container}>
      <View style={[styles.contentWrap, isTablet && styles.tabletWrap]}>
        {/* Search Header */}
        <View style={[styles.searchBox, { backgroundColor: c.surface, borderColor: c.border }]}>
          <Ionicons name="search" size={20} color={c.textTertiary} style={styles.searchIcon} />

          <TextInput
            style={[styles.input, { color: c.text }]}
            placeholder="Search 65,000+ words offline (e.g. beautiful, gravity)..."
            placeholderTextColor={c.placeholder}
            value={query}
            onChangeText={setQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {loading ? (
            <ActivityIndicator size="small" color={c.primary} style={styles.loadingIndicator} />
          ) : query.length > 0 ? (
            <TouchableOpacity
              onPress={() => setQuery('')}
              style={styles.clearBtn}
              accessibilityLabel="Clear search text"
            >
              <Ionicons name="close-circle" size={18} color={c.textTertiary} />
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Quick Filter Pills */}
        <View style={styles.filterSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
          >
            {QUICK_FILTERS.map((f) => {
              const isSelected = selectedFilter === f.id;
              return (
                <TouchableOpacity
                  key={f.id}
                  style={[
                    styles.filterPill,
                    {
                      backgroundColor: isSelected ? c.primary : c.surfaceVariant,
                      borderColor: isSelected ? c.primary : c.border,
                    },
                  ]}
                  onPress={() => handleFilterSelect(f)}
                  activeOpacity={0.7}
                >
                  <ThemedText
                    style={[
                      styles.filterText,
                      { color: isSelected ? '#FFFFFF' : c.text },
                    ]}
                  >
                    {f.label}
                  </ThemedText>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Word Results List */}
        <FlatList
          data={words}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWordCard}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            !loading ? (
              <View style={styles.emptyContainer}>
                <Ionicons name="book-outline" size={48} color={c.textTertiary} />
                <ThemedText style={[styles.emptyTitle, { color: c.text }]}>
                  No matching words found
                </ThemedText>
                <ThemedText style={[styles.emptySubtitle, { color: c.textSecondary }]}>
                  Try a different spelling or prefix (e.g. "bea", "educ", "know")
                </ThemedText>
              </View>
            ) : null
          }
        />
      </View>

      {/* Word Detail Modal */}
      {selectedWord && (
        <Modal
          visible={!!selectedWord}
          transparent
          animationType="fade"
          onRequestClose={() => setSelectedWord(null)}
        >
          <View style={[styles.modalOverlay, { backgroundColor: c.overlay }]}>
            <View
              style={[
                styles.modalCard,
                { backgroundColor: c.card, borderColor: c.border },
                shadow.lg,
              ]}
            >
              {/* Modal Header */}
              <View style={styles.modalHeader}>
                <View style={[styles.posBadge, { backgroundColor: c.surfaceVariant }]}>
                  <ThemedText style={[styles.posText, { color: c.textSecondary }]}>
                    {selectedWord.partOfSpeech || 'Word'}
                  </ThemedText>
                </View>

                <TouchableOpacity
                  onPress={() => setSelectedWord(null)}
                  style={[styles.modalCloseBtn, { backgroundColor: c.surfaceVariant }]}
                  accessibilityLabel="Close modal"
                >
                  <Ionicons name="close" size={20} color={c.text} />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Title & Pronunciation */}
                <View style={styles.modalTitleRow}>
                  <ThemedText style={[styles.modalWordTitle, { color: c.text }]}>
                    {selectedWord.word}
                  </ThemedText>

                  <TouchableOpacity
                    style={[
                      styles.modalAudioBtn,
                      { backgroundColor: isSpeaking ? c.primaryLight : c.primary },
                    ]}
                    onPress={() => handleSpeak(selectedWord.word)}
                    accessibilityLabel="Listen pronunciation"
                  >
                    <Ionicons name="volume-high" size={20} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>

                {/* Hindi Meaning */}
                <View style={[styles.modalHindiBox, { backgroundColor: c.surfaceVariant }]}>
                  <ThemedText style={[styles.modalHindiLabel, { color: c.textTertiary }]}>
                    Hindi Translation / अर्थ
                  </ThemedText>
                  <ThemedText
                    variant="hindi"
                    style={[styles.modalHindiText, { color: c.primary }]}
                  >
                    {selectedWord.meaningHindi}
                  </ThemedText>
                </View>

                {/* Action Buttons */}
                <View style={styles.modalActionRow}>
                  <TouchableOpacity
                    style={[
                      styles.fullDetailBtn,
                      { backgroundColor: c.primary },
                    ]}
                    onPress={() => {
                      const w = selectedWord;
                      setSelectedWord(null);
                      navigation.navigate('WordDetail', {
                        wordId: w.id,
                        word: w.word,
                      });
                    }}
                  >
                    <ThemedText style={styles.fullDetailBtnText}>
                      Open Full Word Page
                    </ThemedText>
                    <Ionicons name="arrow-forward" size={16} color="#FFFFFF" style={{ marginLeft: 6 }} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrap: {
    flex: 1,
    paddingTop: spacing['3'],
  },
  tabletWrap: {
    maxWidth: maxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing['4'],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    paddingHorizontal: spacing['3'],
    height: 48,
  },
  searchIcon: {
    marginRight: spacing['2'],
  },
  input: {
    flex: 1,
    fontSize: fontSize.sm,
    height: '100%',
  },
  loadingIndicator: {
    padding: spacing['2'],
  },
  clearBtn: {
    padding: spacing['2'],
  },
  filterSection: {
    marginTop: spacing['3'],
    marginBottom: spacing['2'],
  },
  filterScroll: {
    paddingHorizontal: spacing['4'],
    gap: spacing['2'],
  },
  filterPill: {
    paddingHorizontal: spacing['3'],
    paddingVertical: 6,
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
  filterText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semiBold,
  },
  listContent: {
    paddingHorizontal: spacing['4'],
    paddingTop: spacing['2'],
    paddingBottom: spacing['8'],
    gap: spacing['3'],
  },
  card: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    padding: spacing['4'],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wordTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: spacing['2'],
  },
  wordTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  posBadge: {
    paddingHorizontal: spacing['2'],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  posText: {
    fontSize: 10,
    fontWeight: fontWeight.semiBold,
    textTransform: 'uppercase',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['2'],
  },
  miniActionBtn: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHindi: {
    fontSize: fontSize.md,
    lineHeight: 24,
    marginTop: spacing['2'],
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['12'],
  },
  emptyTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    marginTop: spacing['3'],
  },
  emptySubtitle: {
    fontSize: fontSize.sm,
    textAlign: 'center',
    marginTop: spacing['1'],
    paddingHorizontal: spacing['6'],
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing['5'],
  },
  modalCard: {
    width: '100%',
    maxWidth: 520,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    padding: spacing['5'],
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing['3'],
  },
  modalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing['3'],
  },
  modalWordTitle: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.extraBold,
  },
  modalAudioBtn: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHindiBox: {
    borderRadius: borderRadius.lg,
    padding: spacing['4'],
    marginBottom: spacing['4'],
  },
  modalHindiLabel: {
    fontSize: fontSize.xs,
    textTransform: 'uppercase',
    fontWeight: fontWeight.semiBold,
    marginBottom: 4,
  },
  modalHindiText: {
    fontSize: fontSize.lg,
    lineHeight: 28,
  },
  modalActionRow: {
    marginTop: spacing['2'],
  },
  fullDetailBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['3'],
    borderRadius: borderRadius.lg,
  },
  fullDetailBtnText: {
    color: '#FFFFFF',
    fontWeight: fontWeight.bold,
    fontSize: fontSize.sm,
  },
});
