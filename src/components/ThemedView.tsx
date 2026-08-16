// ─── Themed View ─────────────────────────────────────────────────────────────

import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export interface ThemedViewProps extends ViewProps {
  variant?: 'background' | 'surface' | 'card' | 'surfaceVariant';
  children?: React.ReactNode;
}

export function ThemedView({ variant = 'background', style, children, ...props }: ThemedViewProps) {
  const { theme } = useTheme();
  const bgColor = {
    background: theme.colors.background,
    surface: theme.colors.surface,
    card: theme.colors.card,
    surfaceVariant: theme.colors.surfaceVariant,
  }[variant];

  return (
    <View style={[{ backgroundColor: bgColor }, style]} {...props}>
      {children}
    </View>
  );
}
