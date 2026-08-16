// ─── Themed Text Component ────────────────────────────────────────────────────

import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { fontSize, fontWeight } from '../theme/typography';

interface ThemedTextProps extends TextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'caption' | 'label' | 'hindi' | 'word';
  color?: string;
  bold?: boolean;
  semiBold?: boolean;
}

export function ThemedText({
  variant = 'body',
  color,
  bold,
  semiBold,
  style,
  ...props
}: ThemedTextProps) {
  const { theme } = useTheme();
  const c = theme.colors;

  const variantStyle = styles[variant];
  const textColor = color ?? (variant === 'hindi' ? c.hindi : variant === 'caption' ? c.textSecondary : c.text);

  return (
    <Text
      style={[
        variantStyle,
        { color: textColor },
        bold && { fontWeight: fontWeight.bold },
        semiBold && { fontWeight: fontWeight.semiBold },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
  },
  body: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: 24,
  },
  caption: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: 20,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semiBold,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  hindi: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    lineHeight: 32,
  },
  word: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.extraBold,
    letterSpacing: -1,
  },
});
