// ─── Word of the Day Screen ───────────────────────────────────────────────────

import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { SectionHeader } from '../components/SectionHeader';
import { EmptyState } from '../components/EmptyState';
import { dictionaryRepository } from '../repositories/DictionaryRepository';
import { favoritesRepository } from '../repositories/FavoritesRepository';
import { historyRepository } from '../repositories/HistoryRepository';
import { ttsService } from '../services/TTSService';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Word } from '../types';

type WotdNavProp = NativeStackNavigationProp<RootStackParamList>;

export function WordOfDayScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<WotdNavProp>();
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, maxContentWidth);

  const [word, setWord] = useState<Word | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const w = await dictionaryRepository.getWordOfDay();
        if (!cancelled && w) {
          const fav = await favoritesRepository.isFavorite(w.id);
          setWord(w);
          setIsFavorite(fav);
          // Add to history
          historyRepository.addToHistory(w.id).catch(() => {});
        }
      } catch (err) {
        console.error('[WordOfDay] error:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  const handleSpeak = useCallback(() => {
    if (!word) return;
    setIsSpeaking(true);
    ttsService.speak(
      word.word,
      () => setIsSpeaking(false),
      (msg) => {
        setIsSpeaking(false);
        Alert.alert('Pronunciation', msg);
      }
    );
  }, [word]);

  const handleFavorite = useCallback(async () => {
    if (!word) return;
    try {
      if (isFavorite) {
        await favoritesRepository.removeFavorite(word.id);
        setIsFavorite(false);
      } else {
        await favoritesRepository.addFavorite(word.id);
        setIsFavorite(true);
      }
    } catch {}
  }, [word, isFavorite]);

  // Date display
  const dateStr = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

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
          <EmptyState icon="☀️" title="No word available" subtitle="Please try again later." />
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scroll, { paddingBottom: spacing['12'] }]}
        >
          <View style={[styles.inner, { maxWidth: contentWidth, alignSelf: 'center', width: '100%' }]}>
            {/* Date Label */}
            <ThemedText variant="caption" style={{ color: c.textSecondary, marginBottom: spacing['4'], textAlign: 'center' }}>
              ☀️  {dateStr}
            </ThemedText>

            {/* Hero */}
            <View style={[styles.hero, { backgroundColor: c.primary }, shadow.lg]}>
              <ThemedText style={{ color: 'rgba(255,255,255,0.7)', fontSize: fontSize.xs, fontWeight: fontWeight.semiBold, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
                Word of the Day
              </ThemedText>
              <ThemedText style={{ color: '#fff', fontSize: 40, fontWeight: fontWeight.extraBold, letterSpacing: -1, marginBottom: 4 }}>
                {word.word}
              </ThemedText>
              <ThemedText style={{ color: 'rgba(255,255,255,0.7)', fontSize: fontSize.sm, marginBottom: spacing['4'] }}>
                {word.pronunciation} · {word.partOfSpeech}
              </ThemedText>
              <ThemedText style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20, fontWeight: fontWeight.semiBold, marginBottom: spacing['5'] }}>
                {word.meaningHindi}
              </ThemedText>

              {/* Action row */}
              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={[styles.actionBtn, { backgroundColor: 'rgba(255,255,255,0.2)' }]}
                  onPress={handleSpeak}
                  accessibilityLabel={`Listen to ${word.word}`}
                  accessibilityRole="button"
                >
                  <Ionicons name={isSpeaking ? 'volume-high' : 'volume-medium-outline'} size={18} color="#fff" />
                  <ThemedText style={{ color: '#fff', marginLeft: 6, fontWeight: fontWeight.semiBold, fontSize: fontSize.sm }}>
                    {isSpeaking ? 'Playing…' : 'Listen'}
                  </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionBtn, { backgroundColor: isFavorite ? '#FFB30030' : 'rgba(255,255,255,0.2)' }]}
                  onPress={handleFavorite}
                  accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  accessibilityRole="button"
                >
                  <Ionicons name={isFavorite ? 'star' : 'star-outline'} size={18} color={isFavorite ? '#FFB300' : '#fff'} />
                  <ThemedText style={{ color: isFavorite ? '#FFB300' : '#fff', marginLeft: 6, fontWeight: fontWeight.semiBold, fontSize: fontSize.sm }}>
                    {isFavorite ? 'Saved' : 'Save'}
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>

            {/* Definition */}
            {word.definition ? (
              <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
                <SectionHeader title="Definition" />
                <ThemedText variant="body" style={{ color: c.text, lineHeight: 26 }}>
                  {word.definition}
                </ThemedText>
              </View>
            ) : null}

            {/* Example */}
            {word.example ? (
              <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
                <SectionHeader title="Example" />
                <View style={[styles.exBox, { borderLeftColor: c.primary }]}>
                  <ThemedText variant="body" style={{ fontStyle: 'italic', color: c.text, lineHeight: 26 }}>
                    "{word.example}"
                  </ThemedText>
                </View>
              </View>
            ) : null}

            {/* Synonyms */}
            {word.synonyms && word.synonyms.length > 0 && (
              <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
                <SectionHeader title="Synonyms" />
                <View style={styles.tagRow}>
                  {word.synonyms.map((s, i) => (
                    <View key={i} style={[styles.tag, { backgroundColor: c.primary + '18', borderColor: c.primary + '40' }]}>
                      <ThemedText style={{ color: c.primary, fontSize: fontSize.sm, fontWeight: fontWeight.semiBold }}>{s}</ThemedText>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* View Full Details */}
            <TouchableOpacity
              style={[styles.detailsBtn, { backgroundColor: c.primary }]}
              onPress={() => navigation.navigate('WordDetail', { wordId: word.id, word: word.word })}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel="View full word details"
            >
              <ThemedText style={{ color: '#fff', fontWeight: fontWeight.bold, fontSize: fontSize.md }}>
                View Full Details
              </ThemedText>
              <Ionicons name="arrow-forward" size={18} color="#fff" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scroll: { paddingHorizontal: spacing['5'], paddingTop: spacing['5'] },
  inner: {},
  hero: {
    borderRadius: borderRadius.xl,
    padding: spacing['6'],
    marginBottom: spacing['4'],
  },
  actionRow: {
    flexDirection: 'row',
    gap: spacing['3'],
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
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
  exBox: {
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
  detailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.xl,
    paddingVertical: spacing['4'],
    marginBottom: spacing['4'],
  },
});
