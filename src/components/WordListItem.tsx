// ─── Word List Item ───────────────────────────────────────────────────────────
// A compact, clean search result row displaying maximum 4 Hindi meanings.

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from './ThemedText';
import { borderRadius, spacing, shadow } from '../theme/spacing';
import { Word } from '../types';
import { fontWeight } from '../theme/typography';
import { formatTopHindiMeanings } from '../utils/formatDictionaryMeanings';

interface WordListItemProps {
  word: Word;
  onPress: () => void;
}

export function WordListItem({ word, onPress }: WordListItemProps) {
  const { theme } = useTheme();
  const c = theme.colors;

  const topHindi = formatTopHindiMeanings(word.meaningHindi, 4);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: c.card, borderColor: c.border },
        shadow.sm,
      ]}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={`${word.word}: ${topHindi}`}
    >
      <View style={styles.content}>
        <View style={styles.left}>
          {/* Top row: Word and optional pronunciation */}
          <View style={styles.wordRow}>
            <ThemedText style={[styles.word, { color: c.text }]}>
              {word.word}
            </ThemedText>
            {word.pronunciation ? (
              <ThemedText style={[styles.pronunciation, { color: c.textTertiary }]}>
                {word.pronunciation}
              </ThemedText>
            ) : null}
          </View>

          {/* Hindi Meanings (Maximum 4, clean and readable) */}
          <ThemedText
            style={[styles.hindi, { color: c.primary }]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {topHindi}
          </ThemedText>

          {/* Bottom row: Part of Speech badge */}
          {word.partOfSpeech ? (
            <View style={[styles.badge, { backgroundColor: c.surfaceVariant }]}>
              <ThemedText style={[styles.badgeText, { color: c.textSecondary }]}>
                {word.partOfSpeech}
              </ThemedText>
            </View>
          ) : null}
        </View>

        {/* Navigation arrow */}
        <Ionicons
          name="chevron-forward"
          size={16}
          color={c.textTertiary}
          style={styles.chevron}
        />
      </View>
    </TouchableOpacity>
  );
}

export default WordListItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    marginBottom: spacing['2'],
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing['3'] + 2,
    paddingVertical: spacing['2'] + 2,
  },
  left: {
    flex: 1,
  },
  wordRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing['2'],
  },
  word: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: fontWeight.bold,
    letterSpacing: -0.2,
  },
  pronunciation: {
    fontSize: 11,
    lineHeight: 15,
  },
  hindi: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontWeight.medium,
    marginTop: 2,
    marginBottom: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: borderRadius.xs,
    marginTop: 2,
  },
  badgeText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: fontWeight.semiBold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chevron: {
    marginLeft: spacing['2'],
  },
});
