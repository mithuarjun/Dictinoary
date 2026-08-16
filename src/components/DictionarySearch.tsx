// ─── Student Dictionary Search Component ───────────────────────────────────────
// Fast interactive search, EN <-> HI language toggle, category filter, and modal detail card.

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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { useTheme } from '../hooks/useTheme';
import {
  dictionaryService,
  DictionaryItem,
  LanguageMode,
} from '../services/dictionaryService';
import { ttsService } from '../services/TTSService';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';

const CATEGORIES = [
  { id: 'all', label: '📚 All' },
  { id: 'daily', label: '🗣️ Daily' },
  { id: 'academic_science', label: '🔬 Science' },
  { id: 'academic_math', label: '📐 Math' },
  { id: 'exam_vocab', label: '🎯 Exam' },
  { id: 'phrases', label: '💡 Phrases' },
];

export function DictionarySearch() {
  const { theme } = useTheme();
  const c = theme.colors;
  const { width } = useWindowDimensions();
  const isTablet = width >= maxContentWidth;

  const [query, setQuery] = useState('');
  const [lang, setLang] = useState<LanguageMode>('en');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [results, setResults] = useState<DictionaryItem[]>([]);
  const [selectedWord, setSelectedWord] = useState<DictionaryItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // Initialize Database on mount
  useEffect(() => {
    dictionaryService.initDictionaryDB();
    loadCategoryWords('all');
  }, []);

  const loadCategoryWords = async (cat: string) => {
    setLoading(true);
    try {
      const items = await dictionaryService.getWordsByCategory(cat, 60);
      setResults(items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      loadCategoryWords(selectedCategory);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const items = await dictionaryService.searchWords(query, lang, 30);
        setResults(items);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query, lang, selectedCategory]);

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
    setQuery('');
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setQuery('');
    loadCategoryWords(catId);
  };

  const handleSpeak = (text: string) => {
    setSpeaking(true);
    ttsService.speak(
      text,
      () => setSpeaking(false),
      () => setSpeaking(false)
    );
  };

  const formatCategoryBadge = (cat?: string) => {
    switch (cat) {
      case 'academic_science':
        return { label: 'Science', color: '#0284C7', bg: '#E0F2FE' };
      case 'academic_math':
        return { label: 'Math', color: '#7C3AED', bg: '#EDE9FE' };
      case 'exam_vocab':
        return { label: 'Exam', color: '#D97706', bg: '#FEF3C7' };
      case 'phrases':
        return { label: 'Phrase', color: '#059669', bg: '#D1FAE5' };
      default:
        return { label: 'Daily', color: '#2563EB', bg: '#EFF6FF' };
    }
  };

  const renderItem = useCallback(
    ({ item }: { item: DictionaryItem }) => {
      const badge = formatCategoryBadge(item.category);
      return (
        <TouchableOpacity
          style={[
            styles.resultCard,
            { backgroundColor: c.card, borderColor: c.border },
            shadow.sm,
          ]}
          onPress={() => setSelectedWord(item)}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={`${item.word_en}: ${item.word_hi}`}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleWrap}>
              <ThemedText style={[styles.wordEn, { color: c.text }]}>
                {item.word_en}
              </ThemedText>
              {item.phonetic ? (
                <ThemedText style={[styles.phonetic, { color: c.textTertiary }]}>
                  {item.phonetic}
                </ThemedText>
              ) : null}
            </View>

            <View style={[styles.badge, { backgroundColor: badge.bg }]}>
              <ThemedText style={[styles.badgeText, { color: badge.color }]}>
                {badge.label}
              </ThemedText>
            </View>
          </View>

          <ThemedText style={[styles.wordHi, { color: c.primary }]}>
            {item.word_hi}
          </ThemedText>

          {item.part_of_speech ? (
            <ThemedText style={[styles.pos, { color: c.textSecondary }]}>
              {item.part_of_speech}
            </ThemedText>
          ) : null}
        </TouchableOpacity>
      );
    },
    [c]
  );

  return (
    <ThemedView variant="background" style={styles.container}>
      <View style={[styles.contentWrap, isTablet && styles.tabletWrap]}>
        {/* Search Header */}
        <View style={[styles.searchBarContainer, { backgroundColor: c.surface, borderColor: c.border }]}>
          <Ionicons name="search" size={20} color={c.textTertiary} style={styles.searchIcon} />

          <TextInput
            style={[styles.searchInput, { color: c.text }]}
            placeholder={
              lang === 'en'
                ? 'Type student word (e.g. Gravity, Area)...'
                : 'हिंदी शब्द टाइप करें (उदा. बल, कोण)...'
            }
            placeholderTextColor={c.placeholder}
            value={query}
            onChangeText={setQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {loading ? (
            <ActivityIndicator size="small" color={c.primary} style={styles.actionBtn} />
          ) : query.length > 0 ? (
            <TouchableOpacity onPress={() => setQuery('')} style={styles.actionBtn}>
              <Ionicons name="close-circle" size={18} color={c.textTertiary} />
            </TouchableOpacity>
          ) : null}

          {/* Language Mode Toggle Button */}
          <TouchableOpacity
            style={[styles.langToggleBtn, { backgroundColor: c.primary }]}
            onPress={handleLanguageToggle}
            accessibilityRole="button"
            accessibilityLabel={`Current language: ${lang.toUpperCase()}`}
          >
            <ThemedText style={styles.langToggleText}>
              {lang === 'en' ? 'EN ➔ HI' : 'HI ➔ EN'}
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Category Pills */}
        <View style={styles.categoriesSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScroll}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  style={[
                    styles.categoryPill,
                    {
                      backgroundColor: isSelected ? c.primary : c.surfaceVariant,
                      borderColor: isSelected ? c.primary : c.border,
                    },
                  ]}
                  onPress={() => handleCategorySelect(cat.id)}
                  activeOpacity={0.7}
                >
                  <ThemedText
                    style={[
                      styles.categoryLabel,
                      { color: isSelected ? '#FFFFFF' : c.text },
                    ]}
                  >
                    {cat.label}
                  </ThemedText>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Results List */}
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            !loading ? (
              <View style={styles.emptyWrap}>
                <Ionicons name="book-outline" size={48} color={c.textTertiary} />
                <ThemedText style={[styles.emptyTitle, { color: c.text }]}>
                  No vocabulary found
                </ThemedText>
                <ThemedText style={[styles.emptySub, { color: c.textSecondary }]}>
                  Try another search or switch language mode ({lang === 'en' ? 'EN ➔ HI' : 'HI ➔ EN'})
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
                <View style={[styles.badge, { backgroundColor: formatCategoryBadge(selectedWord.category).bg }]}>
                  <ThemedText
                    style={[
                      styles.badgeText,
                      { color: formatCategoryBadge(selectedWord.category).color },
                    ]}
                  >
                    {formatCategoryBadge(selectedWord.category).label}
                  </ThemedText>
                </View>

                <TouchableOpacity
                  onPress={() => setSelectedWord(null)}
                  style={[styles.closeBtn, { backgroundColor: c.surfaceVariant }]}
                >
                  <Ionicons name="close" size={20} color={c.text} />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Word Title & Audio */}
                <View style={styles.titleRow}>
                  <ThemedText style={[styles.modalWordTitle, { color: c.text }]}>
                    {selectedWord.word_en}
                  </ThemedText>

                  <TouchableOpacity
                    style={[
                      styles.audioBtn,
                      { backgroundColor: speaking ? c.primaryLight : c.primary },
                    ]}
                    onPress={() => handleSpeak(selectedWord.word_en)}
                    accessibilityRole="button"
                    accessibilityLabel="Listen pronunciation"
                  >
                    <Ionicons name="volume-high" size={20} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>

                {selectedWord.phonetic ? (
                  <ThemedText style={[styles.modalPhonetic, { color: c.textSecondary }]}>
                    {selectedWord.phonetic}
                  </ThemedText>
                ) : null}

                {/* Primary Hindi Translation */}
                <View style={[styles.hindiBox, { backgroundColor: c.surfaceVariant }]}>
                  <ThemedText style={[styles.hindiLabel, { color: c.textTertiary }]}>
                    Hindi Meaning
                  </ThemedText>
                  <ThemedText style={[styles.hindiWord, { color: c.primary }]}>
                    {selectedWord.word_hi}
                  </ThemedText>
                  {selectedWord.part_of_speech ? (
                    <ThemedText style={[styles.modalPos, { color: c.textSecondary }]}>
                      Part of Speech: {selectedWord.part_of_speech}
                    </ThemedText>
                  ) : null}
                </View>

                {/* Example Sentences */}
                {selectedWord.example_en ? (
                  <View style={styles.exampleSection}>
                    <ThemedText style={[styles.exampleHeading, { color: c.text }]}>
                      📝 Example Sentence
                    </ThemedText>
                    <View style={[styles.exampleCard, { borderColor: c.border }]}>
                      <ThemedText style={[styles.exampleEn, { color: c.text }]}>
                        "{selectedWord.example_en}"
                      </ThemedText>
                      {selectedWord.example_hi ? (
                        <ThemedText style={[styles.exampleHi, { color: c.textSecondary }]}>
                          {selectedWord.example_hi}
                        </ThemedText>
                      ) : null}
                    </View>
                  </View>
                ) : null}
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
  searchBarContainer: {
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
  searchInput: {
    flex: 1,
    fontSize: fontSize.sm,
    height: '100%',
  },
  actionBtn: {
    padding: spacing['2'],
  },
  langToggleBtn: {
    paddingHorizontal: spacing['3'],
    paddingVertical: 6,
    borderRadius: borderRadius.md,
    marginLeft: spacing['1'],
  },
  langToggleText: {
    color: '#FFFFFF',
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
  },
  categoriesSection: {
    marginTop: spacing['3'],
    marginBottom: spacing['2'],
  },
  categoriesScroll: {
    paddingHorizontal: spacing['4'],
    gap: spacing['2'],
  },
  categoryPill: {
    paddingHorizontal: spacing['3'],
    paddingVertical: 6,
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
  categoryLabel: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semiBold,
  },
  listContent: {
    paddingHorizontal: spacing['4'],
    paddingTop: spacing['2'],
    paddingBottom: spacing['8'],
    gap: spacing['3'],
  },
  resultCard: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    padding: spacing['4'],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitleWrap: {
    flex: 1,
  },
  wordEn: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  phonetic: {
    fontSize: fontSize.xs,
    marginTop: 2,
  },
  wordHi: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    marginTop: spacing['2'],
  },
  pos: {
    fontSize: fontSize.xs,
    marginTop: 4,
    fontStyle: 'italic',
  },
  badge: {
    paddingHorizontal: spacing['2'],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: fontWeight.bold,
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['12'],
  },
  emptyTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    marginTop: spacing['3'],
  },
  emptySub: {
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
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalWordTitle: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.extraBold,
  },
  audioBtn: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPhonetic: {
    fontSize: fontSize.sm,
    marginTop: 2,
    marginBottom: spacing['4'],
  },
  hindiBox: {
    borderRadius: borderRadius.lg,
    padding: spacing['4'],
    marginBottom: spacing['4'],
  },
  hindiLabel: {
    fontSize: fontSize.xs,
    textTransform: 'uppercase',
    fontWeight: fontWeight.semiBold,
  },
  hindiWord: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    marginTop: 4,
  },
  modalPos: {
    fontSize: fontSize.xs,
    marginTop: spacing['2'],
  },
  exampleSection: {
    marginTop: spacing['2'],
  },
  exampleHeading: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    marginBottom: spacing['2'],
  },
  exampleCard: {
    borderLeftWidth: 3,
    paddingLeft: spacing['3'],
    paddingVertical: spacing['2'],
  },
  exampleEn: {
    fontSize: fontSize.sm,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  exampleHi: {
    fontSize: fontSize.sm,
    lineHeight: 22,
    marginTop: spacing['1'],
  },
});
