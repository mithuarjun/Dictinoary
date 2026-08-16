// ─── Settings Screen ──────────────────────────────────────────────────────────

import React, { useCallback } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { historyRepository } from '../repositories/HistoryRepository';
import { spacing, borderRadius, shadow, maxContentWidth } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { ThemeMode } from '../types';

const APP_VERSION = '1.0.0';

export function SettingsScreen() {
  const { theme, themeMode, setThemeMode } = useTheme();
  const c = theme.colors;
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, maxContentWidth);

  const themeModes: { key: ThemeMode; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
    { key: 'light', label: 'Light', icon: 'sunny-outline' },
    { key: 'dark', label: 'Dark', icon: 'moon-outline' },
    { key: 'system', label: 'System Default', icon: 'phone-portrait-outline' },
  ];

  const handleClearHistory = useCallback(() => {
    Alert.alert(
      'Clear History',
      'This will remove all your recent search history.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await historyRepository.clearHistory();
            Alert.alert('Done', 'Search history cleared.');
          },
        },
      ]
    );
  }, []);

  const Section = ({ title }: { title: string }) => (
    <ThemedText
      variant="label"
      style={{ color: c.textTertiary, marginBottom: spacing['3'], marginTop: spacing['6'] }}
    >
      {title}
    </ThemedText>
  );

  const RowItem = ({
    icon,
    label,
    onPress,
    destructive,
    right,
  }: {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress?: () => void;
    destructive?: boolean;
    right?: React.ReactNode;
  }) => (
    <TouchableOpacity
      style={[styles.row, { backgroundColor: c.card, borderColor: c.border }]}
      onPress={onPress}
      activeOpacity={onPress ? 0.75 : 1}
      accessibilityRole={onPress ? 'button' : 'none'}
      accessibilityLabel={label}
    >
      <View style={[styles.rowIcon, { backgroundColor: (destructive ? c.error : c.primary) + '18' }]}>
        <Ionicons name={icon} size={18} color={destructive ? c.error : c.primary} />
      </View>
      <ThemedText style={[styles.rowLabel, { color: destructive ? c.error : c.text }]}>
        {label}
      </ThemedText>
      {right ?? (onPress && <Ionicons name="chevron-forward" size={16} color={c.textTertiary} />)}
    </TouchableOpacity>
  );

  return (
    <ThemedView variant="background" style={styles.flex}>
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scroll, { paddingBottom: spacing['12'] }]}
        >
          <View style={[styles.inner, { maxWidth: contentWidth, alignSelf: 'center', width: '100%' }]}>

            {/* Theme */}
            <Section title="Appearance" />
            <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, shadow.sm]}>
              {themeModes.map((tm, idx) => {
                const active = themeMode === tm.key;
                return (
                  <TouchableOpacity
                    key={tm.key}
                    style={[
                      styles.themeRow,
                      idx < themeModes.length - 1 && { borderBottomWidth: 1, borderBottomColor: c.divider },
                      active && { backgroundColor: c.primary + '10' },
                    ]}
                    onPress={() => setThemeMode(tm.key)}
                    accessibilityRole="radio"
                    accessibilityLabel={tm.label}
                    accessibilityState={{ checked: active }}
                  >
                    <Ionicons name={tm.icon} size={20} color={active ? c.primary : c.textSecondary} />
                    <ThemedText
                      style={{
                        marginLeft: spacing['3'],
                        flex: 1,
                        fontWeight: active ? fontWeight.semiBold : fontWeight.regular,
                        color: active ? c.primary : c.text,
                        fontSize: fontSize.md,
                      }}
                    >
                      {tm.label}
                    </ThemedText>
                    {active && <Ionicons name="checkmark-circle" size={20} color={c.primary} />}
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Data */}
            <Section title="Data" />
            <RowItem
              icon="trash-outline"
              label="Clear Search History"
              onPress={handleClearHistory}
              destructive
            />

            {/* About */}
            <Section title="About" />
            <View style={[styles.aboutCard, { backgroundColor: c.primary }, shadow.md]}>
              <ThemedText style={{ color: '#fff', fontSize: fontSize['2xl'], fontWeight: fontWeight.extraBold, letterSpacing: -0.5 }}>
                Gem Dictionary
              </ThemedText>
              <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: fontSize.sm, marginTop: 4 }}>
                English → Hindi Offline Dictionary
              </ThemedText>
              <ThemedText style={{ color: 'rgba(255,255,255,0.6)', fontSize: fontSize.xs, marginTop: 2 }}>
                Version {APP_VERSION}
              </ThemedText>

              <ThemedText style={{ color: 'rgba(255,255,255,0.7)', fontSize: fontSize.sm, marginTop: spacing['4'], lineHeight: 20 }}>
                An ad-free offline English to Hindi dictionary designed for fast vocabulary learning.
              </ThemedText>

              <View style={styles.badgeRow}>
                {['Works Offline', 'No Login', 'No Ads'].map((b) => (
                  <View key={b} style={styles.aboutBadge}>
                    <Ionicons name="checkmark-circle" size={12} color="#fff" />
                    <ThemedText style={{ color: '#fff', fontSize: 11, marginLeft: 4, fontWeight: fontWeight.semiBold }}>
                      {b}
                    </ThemedText>
                  </View>
                ))}
              </View>
            </View>

            {/* Privacy */}
            <View style={[styles.privacyCard, { backgroundColor: c.surfaceVariant, borderColor: c.border }]}>
              <Ionicons name="shield-checkmark-outline" size={20} color={c.primary} />
              <ThemedText variant="caption" style={{ color: c.textSecondary, marginLeft: spacing['2'], flex: 1 }}>
                All your data stays on your device. No data is collected or transmitted.
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: { paddingHorizontal: spacing['5'], paddingTop: spacing['3'] },
  inner: {},
  card: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing['4'],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    marginBottom: spacing['3'],
  },
  rowIcon: {
    width: 34,
    height: 34,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing['3'],
  },
  rowLabel: {
    flex: 1,
    fontSize: fontSize.md,
  },
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing['4'],
  },
  aboutCard: {
    borderRadius: borderRadius.xl,
    padding: spacing['6'],
    marginBottom: spacing['4'],
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing['2'],
    marginTop: spacing['4'],
  },
  aboutBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: spacing['3'],
    paddingVertical: spacing['1'],
    borderRadius: borderRadius.full,
  },
  privacyCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    padding: spacing['4'],
    marginBottom: spacing['4'],
  },
});
