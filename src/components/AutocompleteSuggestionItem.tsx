// ─── Autocomplete Suggestion Item ──────────────────────────────────────────
// Clean, student-friendly suggestion item with highlighted matching prefix.

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from './ThemedText';
import { Word } from '../types';
import { formatTopHindiMeanings } from '../utils/formatDictionaryMeanings';
import { spacing, borderRadius } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';

interface AutocompleteSuggestionItemProps {
  word: Word;
  query: string;
  onSelect: (word: Word) => void;
  isLast?: boolean;
}

export function AutocompleteSuggestionItem({
  word,
  query,
  onSelect,
  isLast,
}: AutocompleteSuggestionItemProps) {
  const { theme } = useTheme();
  const c = theme.colors;

  const cleanHindi = formatTopHindiMeanings(word.meaningHindi, 4);
  const trimmedQuery = query.trim().toLowerCase();
  const wordText = word.word;
  const wordLower = wordText.toLowerCase();

  // Highlight matched prefix
  const hasPrefixMatch = trimmedQuery.length > 0 && wordLower.startsWith(trimmedQuery);
  const matchLength = hasPrefixMatch ? trimmedQuery.length : 0;
  const matchedPart = wordText.slice(0, matchLength);
  const remainingPart = wordText.slice(matchLength);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        !isLast && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.divider },
      ]}
      onPress={() => onSelect(word)}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`${word.word}: ${cleanHindi}`}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="search-outline" size={16} color={c.textTertiary} />
      </View>

      <View style={styles.textContainer}>
        {/* Word with highlighted match */}
        <View style={styles.titleRow}>
          <Text style={styles.wordText}>
            {hasPrefixMatch ? (
              <>
                <Text style={{ color: c.primary, fontWeight: fontWeight.bold }}>
                  {matchedPart}
                </Text>
                <Text style={{ color: c.text, fontWeight: fontWeight.semiBold }}>
                  {remainingPart}
                </Text>
              </>
            ) : (
              <Text style={{ color: c.text, fontWeight: fontWeight.semiBold }}>
                {wordText}
              </Text>
            )}
          </Text>

          {word.partOfSpeech ? (
            <View style={[styles.posBadge, { backgroundColor: c.surfaceVariant }]}>
              <ThemedText style={[styles.posText, { color: c.textSecondary }]}>
                {word.partOfSpeech}
              </ThemedText>
            </View>
          ) : null}
        </View>

        {/* Hindi Meaning Preview (Max 4 meanings) */}
        {cleanHindi ? (
          <ThemedText
            style={[styles.hindiText, { color: c.textSecondary }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {cleanHindi}
          </ThemedText>
        ) : null}
      </View>

      <Ionicons name="arrow-forward" size={14} color={c.textTertiary} style={styles.arrow} />
    </TouchableOpacity>
  );
}

export default AutocompleteSuggestionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing['3'],
    paddingHorizontal: spacing['4'],
  },
  iconContainer: {
    marginRight: spacing['3'],
    width: 20,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wordText: {
    fontSize: 16,
    lineHeight: 22,
  },
  posBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: borderRadius.xs,
    marginLeft: spacing['2'],
  },
  posText: {
    fontSize: 9,
    fontWeight: fontWeight.semiBold,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  hindiText: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  arrow: {
    marginLeft: spacing['2'],
    opacity: 0.6,
  },
});
