// ─── Word Detail Screen ───────────────────────────────────────────────────────

import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { SectionHeader } from '../components/SectionHeader';
import { dictionaryRepository } from '../repositories/DictionaryRepository';
import { favoritesRepository } from '../repositories/FavoritesRepository';
import { historyRepository } from '../repositories/HistoryRepository';
import { ttsService } from '../services/TTSService';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Word } from '../types';
import { formatTopHindiMeanings } from '../utils/formatDictionaryMeanings';

type DetailRouteProp = RouteProp<RootStackParamList, 'WordDetail'>;
type DetailNavProp = NativeStackNavigationProp<RootStackParamList, 'WordDetail'>;

export function WordDetailScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<DetailNavProp>();
  const route = useRoute<DetailRouteProp>();
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, maxContentWidth);

  const { wordId, word: wordText } = route.params;
  const [word, setWord] = useState<Word | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const [w, fav] = await Promise.all([
          dictionaryRepository.getWordById(wordId),
          favoritesRepository.isFavorite(wordId),
        ]);
        if (!cancelled) {
          setWord(w);
          setIsFavorite(fav);
          setLoading(false);
          // Add to history
          if (w) {
            historyRepository.addToHistory(w.id).catch(() => {});
          }
        }
      } catch (err) {
        console.error('[WordDetail] load error:', err);
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [wordId]);

  const handleSpeak = useCallback(() => {
    if (!word) return;
    setIsSpeaking(true);
    ttsService.speak(
      word.word,
      () => setIsSpeaking(false),
      (errMsg) => {
        setIsSpeaking(false);
        Alert.alert('Pronunciation', errMsg);
      }
    );
  }, [word]);

  const handleToggleFavorite = useCallback(async () => {
    if (!word) return;
    try {
      if (isFavorite) {
        await favoritesRepository.removeFavorite(word.id);
        setIsFavorite(false);
      } else {
        await favoritesRepository.addFavorite(word.id);
        setIsFavorite(true);
      }
    } catch (err) {
      console.error('[WordDetail] favorite error:', err);
    }
  }, [word, isFavorite]);

  if (loading) {
    return (
      <ThemedView variant="background" style={styles.flex}>
        <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
          <View style={styles.center}>
            <ThemedText variant="caption">Loading…</ThemedText>
          </View>
        </SafeAreaView>
      </ThemedView>
    );
  }

  if (!word) {
    return (
      <ThemedView variant="background" style={styles.flex}>
        <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
          <View style={styles.center}>
            <ThemedText variant="subtitle">Word not found</ThemedText>
          </View>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView variant="background" style={styles.flex}>
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        {/* Top bar */}
        <View style={[styles.topBar, { borderBottomColor: c.divider }]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.iconBtn, { backgroundColor: c.surfaceVariant }]}
            accessibilityLabel="Go back"
            accessibilityRole="button"
          >
            <Ionicons name="arrow-back" size={22} color={c.text} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleToggleFavorite}
            style={[styles.iconBtn, { backgroundColor: c.surfaceVariant }]}
            accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            accessibilityRole="button"
          >
            <Ionicons
              name={isFavorite ? 'star' : 'star-outline'}
              size={22}
              color={isFavorite ? c.favoriteActive : c.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: spacing['12'] },
          ]}
        >
          <View style={[styles.inner, { maxWidth: contentWidth, alignSelf: 'center', width: '100%' }]}>
            {/* Hero Card */}
            <View
              style={[
                styles.heroCard,
                { backgroundColor: c.primary },
                shadow.lg,
              ]}
            >
              {/* Part of speech badge */}
              <View style={styles.posBadge}>
                <ThemedText
                  style={{ color: 'rgba(255,255,255,0.75)', fontSize: fontSize.xs, fontWeight: fontWeight.semiBold, letterSpacing: 0.5, textTransform: 'uppercase' }}
                >
                  {word.partOfSpeech}
                </ThemedText>
              </View>

              {/* Word */}
              <ThemedText
                style={{ color: '#fff', fontSize: 38, fontWeight: fontWeight.extraBold, letterSpacing: -1, marginBottom: 4 }}
              >
                {word.word}
              </ThemedText>

              {/* Phonetic */}
              <ThemedText
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: fontSize.sm, marginBottom: spacing['4'] }}
              >
                {word.pronunciation}
              </ThemedText>

              {/* Listen button */}
              <TouchableOpacity
                style={[styles.listenBtn, { backgroundColor: 'rgba(255,255,255,0.2)' }]}
                onPress={handleSpeak}
                activeOpacity={0.75}
                accessibilityLabel={`Listen to pronunciation of ${word.word}`}
                accessibilityRole="button"
              >
                <Ionicons
                  name={isSpeaking ? 'volume-high' : 'volume-medium-outline'}
                  size={20}
                  color="#fff"
                />
                <ThemedText style={{ color: '#fff', marginLeft: 8, fontWeight: fontWeight.semiBold, fontSize: fontSize.md }}>
                  {isSpeaking ? 'Playing…' : 'Listen'}
                </ThemedText>
              </TouchableOpacity>
            </View>

            {/* Hindi Meaning Card (Max 4 clean meanings) */}
            <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
              <SectionHeader title="Hindi Meaning" />
              <ThemedText
                variant="hindi"
                style={{ color: c.hindi, fontSize: 22, lineHeight: 34, fontWeight: fontWeight.semiBold }}
              >
                {formatTopHindiMeanings(word.meaningHindi, 4)}
              </ThemedText>
              {word.definition ? (
                <ThemedText
                  variant="body"
                  style={{ color: c.textSecondary, marginTop: spacing['3'] }}
                >
                  {word.definition}
                </ThemedText>
              ) : null}
            </View>

            {/* Example Card */}
            {word.example ? (
              <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
                <SectionHeader title="Example" />
                <View style={[styles.exampleBox, { borderLeftColor: c.primary }]}>
                  <ThemedText
                    variant="body"
                    style={{ color: c.text, fontStyle: 'italic', lineHeight: 26 }}
                  >
                    "{word.example}"
                  </ThemedText>
                </View>
              </View>
            ) : null}

            {/* Synonyms Card */}
            {word.synonyms && word.synonyms.length > 0 && (
              <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
                <SectionHeader title="Synonyms" />
                <View style={styles.tagRow}>
                  {word.synonyms.map((syn, i) => (
                    <View
                      key={i}
                      style={[styles.tag, { backgroundColor: c.primary + '18', borderColor: c.primary + '40' }]}
                    >
                      <ThemedText style={{ color: c.primary, fontSize: fontSize.sm, fontWeight: fontWeight.semiBold }}>
                        {syn}
                      </ThemedText>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Antonyms Card */}
            {word.antonyms && word.antonyms.length > 0 && (
              <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
                <SectionHeader title="Antonyms" />
                <View style={styles.tagRow}>
                  {word.antonyms.map((ant, i) => (
                    <View
                      key={i}
                      style={[styles.tag, { backgroundColor: c.error + '15', borderColor: c.error + '40' }]}
                    >
                      <ThemedText style={{ color: c.error, fontSize: fontSize.sm, fontWeight: fontWeight.semiBold }}>
                        {ant}
                      </ThemedText>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Favorite toggle at bottom */}
            <TouchableOpacity
              style={[
                styles.favBtn,
                {
                  backgroundColor: isFavorite ? c.favoriteActive + '20' : c.surfaceVariant,
                  borderColor: isFavorite ? c.favoriteActive : c.border,
                },
              ]}
              onPress={handleToggleFavorite}
              accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              accessibilityRole="button"
              activeOpacity={0.8}
            >
              <Ionicons
                name={isFavorite ? 'star' : 'star-outline'}
                size={20}
                color={isFavorite ? c.favoriteActive : c.textSecondary}
              />
              <ThemedText
                style={{
                  marginLeft: 8,
                  fontWeight: fontWeight.semiBold,
                  color: isFavorite ? c.favoriteActive : c.textSecondary,
                  fontSize: fontSize.md,
                }}
              >
                {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

export default WordDetailScreen;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing['5'],
    paddingVertical: spacing['3'],
    borderBottomWidth: 1,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: spacing['5'],
    paddingTop: spacing['4'],
  },
  inner: {},
  heroCard: {
    borderRadius: borderRadius.xl,
    padding: spacing['6'],
    marginBottom: spacing['4'],
  },
  posBadge: {
    marginBottom: spacing['2'],
  },
  listenBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing['4'],
    paddingVertical: spacing['2'],
    borderRadius: borderRadius.full,
  },
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing['5'],
    borderWidth: 1,
    marginBottom: spacing['4'],
  },
  exampleBox: {
    borderLeftWidth: 3,
    paddingLeft: spacing['4'],
    marginTop: spacing['2'],
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing['2'],
    marginTop: spacing['2'],
  },
  tag: {
    paddingHorizontal: spacing['3'],
    paddingVertical: spacing['1'] + 2,
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
  favBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.xl,
    borderWidth: 1.5,
    paddingVertical: spacing['4'],
    marginBottom: spacing['4'],
  },
});
