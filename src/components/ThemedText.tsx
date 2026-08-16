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
  children?: React.ReactNode;
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
    fontSize: 22,
    fontWeight: fontWeight.bold,
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: fontWeight.medium,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    fontWeight: fontWeight.regular,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: fontWeight.regular,
    lineHeight: 16,
  },
  label: {
    fontSize: 11,
    fontWeight: fontWeight.semiBold,
    letterSpacing: 0.6,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  hindi: {
    fontSize: 16,
    fontWeight: fontWeight.medium,
    lineHeight: 24,
  },
  word: {
    fontSize: 26,
    fontWeight: fontWeight.extraBold,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
});
