// ─── Empty State ──────────────────────────────────────────────────────────────

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { spacing } from '../theme/spacing';
import { fontSize } from '../theme/typography';

interface EmptyStateProps {
  icon?: string;
  title: string;
  subtitle?: string;
}

export function EmptyState({ icon = '📭', title, subtitle }: EmptyStateProps) {
  return (
    <View style={styles.container} accessibilityLiveRegion="polite">
      <ThemedText style={styles.icon}>{icon}</ThemedText>
      <ThemedText variant="subtitle" bold style={styles.title}>
        {title}
      </ThemedText>
      {subtitle && (
        <ThemedText variant="caption" color={undefined} style={styles.subtitle}>
          {subtitle}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing['8'],
    paddingVertical: spacing['16'],
  },
  icon: {
    fontSize: 56,
    marginBottom: spacing['4'],
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing['2'],
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 22,
  },
});
