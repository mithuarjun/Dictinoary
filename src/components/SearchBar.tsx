// ─── Search Bar Component ─────────────────────────────────────────────────────

import React, { useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { borderRadius, spacing, shadow } from '../theme/spacing';
import { fontSize } from '../theme/typography';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  onClear?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  value,
  onChangeText,
  onSubmit,
  onClear,
  placeholder = 'Search an English word…',
  autoFocus = false,
}: SearchBarProps) {
  const { theme } = useTheme();
  const c = theme.colors;
  const inputRef = useRef<TextInput>(null);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: c.searchBackground, borderColor: c.border },
        shadow.md,
      ]}
    >
      <Ionicons
        name="search"
        size={20}
        color={c.placeholder}
        style={styles.icon}
        accessibilityLabel="Search icon"
      />
      <TextInput
        ref={inputRef}
        style={[styles.input, { color: c.text }]}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        placeholderTextColor={c.placeholder}
        autoFocus={autoFocus}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
        clearButtonMode="never"
        accessibilityLabel="Search input"
        accessibilityHint="Type an English word to find its Hindi meaning"
      />
      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            onClear?.();
            inputRef.current?.focus();
          }}
          style={styles.clearBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityLabel="Clear search"
          accessibilityRole="button"
        >
          <Ionicons name="close-circle" size={20} color={c.placeholder} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.xl,
    borderWidth: 1.5,
    paddingHorizontal: spacing['4'],
    paddingVertical: Platform.OS === 'ios' ? spacing['3'] : spacing['2'],
    minHeight: 52,
  },
  icon: {
    marginRight: spacing['2'],
  },
  input: {
    flex: 1,
    fontSize: fontSize.lg,
    paddingVertical: 0,
  },
  clearBtn: {
    marginLeft: spacing['2'],
    padding: spacing['1'],
  },
});
