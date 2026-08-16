// ─── Verb Forms Screen ─────────────────────────────────────────────────────────
// Standalone search & autocomplete for English Verb Forms (V1–V5).
// Features Android status bar safe-area positioning, responsive 52px search bar,
// compact V1-V5 rows, and autocomplete state separation.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Keyboard,
  Platform,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { verbFormRepository, VerbFormSuggestion } from '../repositories/VerbFormRepository';
import { VerbForm } from '../types';
import { ttsService } from '../services/TTSService';
import { fontSize, fontWeight } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export function VerbFormsScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<VerbFormSuggestion[]>([]);
  const [selectedVerbForm, setSelectedVerbForm] = useState<VerbForm | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeSpeakingWord, setActiveSpeakingWord] = useState<string | null>(null);

  // Request ID ref for stale query cancellation
  const lastRequestId = useRef(0);

  // Handle typing input
  const handleChangeText = (text: string) => {
    setQuery(text);
    // CRITICAL RULE: Immediately hide any previously selected result when typing new input!
    setSelectedVerbForm(null);
    setHasSearched(false);
  };

  // 120ms Debounced autocomplete suggestions ONLY
  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    // Only fetch suggestions if no verb form is currently selected
    if (selectedVerbForm !== null) {
      return;
    }

    const currentRequestId = ++lastRequestId.current;
    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const suggs = await verbFormRepository.getAutocompleteSuggestions(trimmed, 10);
        if (currentRequestId === lastRequestId.current) {
          setSuggestions(suggs);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('[VerbFormsScreen] suggestion error:', err);
        if (currentRequestId === lastRequestId.current) {
          setIsLoading(false);
        }
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [query, selectedVerbForm]);

  // Handle tapping an autocomplete suggestion
  const handleSelectSuggestion = useCallback(async (sugg: VerbFormSuggestion) => {
    setQuery(sugg.matchedForm);
    setSuggestions([]);
    Keyboard.dismiss();

    setIsLoading(true);
    try {
      let record = await verbFormRepository.getVerbFormById(sugg.id);
      if (!record) {
        record = await verbFormRepository.getVerbFormByWord(sugg.v1);
      }
      setSelectedVerbForm(record);
      setHasSearched(true);
    } catch (err) {
      console.error('[VerbFormsScreen] handleSelectSuggestion error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle pressing Enter / Search on keyboard
  const handleSubmit = useCallback(async () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setSuggestions([]);
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const results = await verbFormRepository.searchVerbForms(trimmed, 1);
      setSelectedVerbForm(results.length > 0 ? results[0] : null);
      setHasSearched(true);
    } catch (err) {
      console.error('[VerbFormsScreen] handleSubmit error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  // Handle clear button
  const handleClear = useCallback(() => {
    setQuery('');
    setSuggestions([]);
    setSelectedVerbForm(null);
    setIsLoading(false);
    setHasSearched(false);
    Keyboard.dismiss();
  }, []);

  const speakText = (text: string) => {
    try {
      setActiveSpeakingWord(text);
      ttsService.speak(
        text,
        () => setActiveSpeakingWord(null),
        () => setActiveSpeakingWord(null)
      );
    } catch (err) {
      console.warn('TTS error:', err);
      setActiveSpeakingWord(null);
    }
  };

  const renderVerbCard = (item: VerbForm) => {
    const forms = [
      { label: 'V1', title: 'Base Form', value: item.v1, tagColor: c.primary },
      { label: 'V2', title: 'Past Simple', value: item.v2, tagColor: '#3B82F6' },
      { label: 'V3', title: 'Past Participle', value: item.v3, tagColor: '#8B5CF6' },
      { label: 'V4', title: 'Present Participle (-ing)', value: item.v4, tagColor: '#EC4899' },
      { label: 'V5', title: '3rd Person (-s/es)', value: item.v5, tagColor: '#10B981' },
    ];

    return (
      <View
        style={[
          styles.card,
          {
            backgroundColor: c.card,
            borderColor: c.border,
            shadowColor: c.shadow,
          },
        ]}
      >
        <View style={styles.formsGrid}>
          {forms.map((f) => (
            <TouchableOpacity
              key={f.label}
              style={[
                styles.formItem,
                {
                  backgroundColor: theme.isDark ? c.surface : '#F8FAFC',
                  borderColor: c.border,
                },
              ]}
              onPress={() => speakText(f.value)}
              activeOpacity={0.75}
            >
              <View style={[styles.formBadge, { backgroundColor: f.tagColor }]}>
                <Text style={styles.formBadgeText}>{f.label}</Text>
              </View>
              <View style={styles.formContent}>
                <Text style={[styles.formValue, { color: c.text }]}>{f.value}</Text>
                <Text style={[styles.formSubLabel, { color: c.textTertiary }]}>{f.title}</Text>
              </View>
              <TouchableOpacity
                onPress={() => speakText(f.value)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                style={styles.speakerBtn}
              >
                <Ionicons
                  name={activeSpeakingWord === f.value ? 'volume-high' : 'volume-low-outline'}
                  size={20}
                  color={c.primary}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: c.background }]}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      {/* Header respecting Android safe-area insets */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: c.surface,
            borderBottomColor: c.border,
            paddingTop: Platform.OS === 'android' ? Math.max(insets.top > 0 ? 8 : 12, 8) : spacing['2'],
          },
        ]}
      >
        <Text style={[styles.title, { color: c.text }]}>Verb Forms</Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          Search any verb form (e.g. go, went, gone, going, goes)
        </Text>
      </View>

      {/* Responsive 52px Search Bar */}
      <View style={styles.searchSection}>
        <View
          style={[
            styles.searchBar,
            {
              backgroundColor: c.searchBackground,
              borderColor: c.border,
            },
          ]}
        >
          <Ionicons name="search-outline" size={20} color={c.textSecondary} style={styles.searchIcon} />
          <TextInput
            style={[styles.searchInput, { color: c.text }]}
            placeholder="Search verb form (e.g. ran, went, search)..."
            placeholderTextColor={c.placeholder}
            value={query}
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmit}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={handleClear} style={styles.clearButton} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Ionicons name="close-circle" size={18} color={c.textTertiary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Content Area State Machine */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={c.primary} />
          <Text style={[styles.loadingText, { color: c.textSecondary }]}>Searching verb forms...</Text>
        </View>
      ) : selectedVerbForm !== null ? (
        /* STATE 3: EXPLICITLY SELECTED VERB GROUP (Render ONLY ONE V1-V5 Card) */
        <View style={styles.listContent}>
          {renderVerbCard(selectedVerbForm)}
        </View>
      ) : query.trim().length > 0 ? (
        /* STATE 2: USER IS TYPING (Render ONLY Autocomplete Suggestions, ZERO V1-V5 Cards) */
        <FlatList
          data={suggestions}
          keyExtractor={(item, idx) => `${item.id}-${item.matchedForm}-${idx}`}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.suggestionsListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.suggestionRow,
                { backgroundColor: c.card, borderColor: c.border },
              ]}
              onPress={() => handleSelectSuggestion(item)}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-forward-circle-outline" size={18} color={c.primary} style={{ marginRight: 10 }} />
              <Text style={[styles.suggestionText, { color: c.text }]}>
                {item.matchedForm}
              </Text>
              {item.matchedForm !== item.v1 && (
                <Text style={[styles.suggestionBase, { color: c.textTertiary }]}>
                  ({item.v1})
                </Text>
              )}
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            hasSearched ? (
              <View style={styles.emptyContainer}>
                <Ionicons name="search-outline" size={44} color={c.textTertiary} />
                <Text style={[styles.emptyTitle, { color: c.text }]}>No Matching Verb Forms</Text>
                <Text style={[styles.emptySubtitle, { color: c.textSecondary }]}>
                  No verb forms matching "{query}" were found.
                </Text>
              </View>
            ) : null
          }
        />
      ) : (
        /* STATE 1: INITIAL OPEN (No verb cards, search prompt UI only) */
        <View style={styles.initialContainer}>
          <View style={[styles.initialIconBg, { backgroundColor: c.primary + '15' }]}>
            <Ionicons name="book-outline" size={36} color={c.primary} />
          </View>
          <Text style={[styles.initialTitle, { color: c.text }]}>Search Verb Forms (V1–V5)</Text>
          <Text style={[styles.initialSubtitle, { color: c.textSecondary }]}>
            Type any tense form like "go", "went", "gone", "going", or "goes" to view its full verb conjugation.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing['4'],
    paddingBottom: spacing['3'],
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: fontWeight.bold,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  searchSection: {
    paddingHorizontal: spacing['4'],
    paddingTop: spacing['3'],
    paddingBottom: spacing['2'],
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: spacing['3'] + 2,
  },
  searchIcon: {
    marginRight: spacing['2'],
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    height: '100%',
  },
  clearButton: {
    padding: spacing['1'],
  },
  suggestionsListContent: {
    paddingHorizontal: spacing['4'],
    paddingBottom: spacing['8'],
    gap: spacing['2'],
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing['3'] + 2,
    height: 48,
    borderRadius: borderRadius.md,
    borderWidth: 1,
  },
  suggestionText: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  suggestionBase: {
    fontSize: fontSize.sm,
    marginLeft: 6,
  },
  listContent: {
    paddingHorizontal: spacing['4'],
    paddingBottom: spacing['8'],
    paddingTop: spacing['1'],
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  formsGrid: {
    gap: 8,
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 54,
  },
  formBadge: {
    width: 32,
    height: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  formBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: fontWeight.bold,
  },
  formContent: {
    flex: 1,
  },
  formValue: {
    fontSize: 16,
    fontWeight: fontWeight.bold,
    lineHeight: 20,
  },
  formSubLabel: {
    fontSize: 11,
    marginTop: 1,
  },
  speakerBtn: {
    padding: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing['3'],
  },
  loadingText: {
    fontSize: fontSize.sm,
  },
  initialContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing['6'],
  },
  initialIconBg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing['3'],
  },
  initialTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    textAlign: 'center',
    marginBottom: spacing['1'],
  },
  initialSubtitle: {
    fontSize: fontSize.sm,
    textAlign: 'center',
    lineHeight: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['8'] * 2,
    gap: spacing['1'],
  },
  emptyTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    marginTop: spacing['2'],
  },
  emptySubtitle: {
    fontSize: fontSize.sm,
    textAlign: 'center',
    paddingHorizontal: spacing['6'],
  },
});
