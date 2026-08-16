// ─── Word Chip ───────────────────────────────────────────────────────────────
// Small pill-shaped chip for recent words, quick search suggestions, etc.

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from './ThemedText';
import { borderRadius, spacing } from '../theme/spacing';
import { fontSize } from '../theme/typography';

interface WordChipProps {
  label: string;
  onPress: () => void;
  icon?: string;
}

export function WordChip({ label, onPress }: WordChipProps) {
  const { theme } = useTheme();
  const c = theme.colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.chip,
        { backgroundColor: c.chipBackground, borderColor: c.border },
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Search ${label}`}
      activeOpacity={0.7}
    >
      <ThemedText
        style={[styles.label, { color: c.chipText }]}
      >
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing['4'],
    paddingVertical: spacing['2'],
    borderRadius: borderRadius.full,
    borderWidth: 1,
    marginRight: spacing['2'],
    marginBottom: spacing['2'],
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
});
