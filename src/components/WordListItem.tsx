// ─── Word List Item ───────────────────────────────────────────────────────────
// A compact, clean search result row displaying maximum 4 Hindi meanings.

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from './ThemedText';
import { borderRadius, spacing, shadow } from '../theme/spacing';
import { Word } from '../types';
import { fontSize, fontWeight } from '../theme/typography';
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
              <ThemedText variant="caption" style={[styles.pronunciation, { color: c.textTertiary }]}>
                {word.pronunciation}
              </ThemedText>
            ) : null}
          </View>

          {/* Hindi Meanings (Maximum 4, clean and readable) */}
          <ThemedText
            variant="hindi"
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
          size={18}
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
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    marginBottom: spacing['3'],
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing['4'],
    paddingVertical: spacing['3'],
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
    fontSize: 20,
    fontWeight: fontWeight.bold,
    letterSpacing: -0.3,
  },
  pronunciation: {
    fontSize: fontSize.xs,
  },
  hindi: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeight.medium,
    marginTop: 4,
    marginBottom: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing['2'],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    marginTop: 2,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: fontWeight.semiBold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chevron: {
    marginLeft: spacing['3'],
  },
});
