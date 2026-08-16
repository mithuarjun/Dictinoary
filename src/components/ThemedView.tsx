// ─── Themed View ─────────────────────────────────────────────────────────────

import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface ThemedViewProps extends ViewProps {
  variant?: 'background' | 'surface' | 'card' | 'surfaceVariant';
}

export function ThemedView({ variant = 'background', style, ...props }: ThemedViewProps) {
  const { theme } = useTheme();
  const bgColor = {
    background: theme.colors.background,
    surface: theme.colors.surface,
    card: theme.colors.card,
    surfaceVariant: theme.colors.surfaceVariant,
  }[variant];

  return <View style={[{ backgroundColor: bgColor }, style]} {...props} />;
}
