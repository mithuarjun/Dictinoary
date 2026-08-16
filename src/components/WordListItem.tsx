// ─── Word List Item ───────────────────────────────────────────────────────────
// A single search result row

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from './ThemedText';
import { borderRadius, spacing, shadow } from '../theme/spacing';
import { Word } from '../types';
import { fontSize } from '../theme/typography';

interface WordListItemProps {
  word: Word;
  onPress: () => void;
}

export function WordListItem({ word, onPress }: WordListItemProps) {
  const { theme } = useTheme();
  const c = theme.colors;

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
      accessibilityLabel={`${word.word}, ${word.meaningHindi}`}
    >
      <View style={styles.content}>
        <View style={styles.left}>
          <ThemedText style={[styles.word, { color: c.primary }]}>
            {word.word}
          </ThemedText>
          <ThemedText variant="caption" style={styles.pronunciation}>
            {word.pronunciation}
          </ThemedText>
          <ThemedText variant="hindi" style={[styles.hindi, { color: c.hindi }]}>
            {word.meaningHindi}
          </ThemedText>
          <View style={[styles.badge, { backgroundColor: c.chipBackground }]}>
            <ThemedText style={[styles.badgeText, { color: c.chipText }]}>
              {word.partOfSpeech}
            </ThemedText>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={c.textTertiary}
          style={styles.chevron}
        />
      </View>
    </TouchableOpacity>
  );
}

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
    padding: spacing['4'],
  },
  left: {
    flex: 1,
    gap: spacing['1'],
  },
  word: {
    fontSize: fontSize.xl,
    fontWeight: '700',
  },
  pronunciation: {
    fontSize: fontSize.xs,
    opacity: 0.7,
  },
  hindi: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    marginTop: spacing['1'],
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing['2'],
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
    marginTop: spacing['1'],
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chevron: {
    marginLeft: spacing['2'],
  },
});
