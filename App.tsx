// ─── App.tsx — Root Entry Point ───────────────────────────────────────────────

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider, useTheme } from './src/hooks/useTheme';
import { useDatabase } from './src/hooks/useDatabase';
import { AppNavigator } from './src/navigation/AppNavigator';

// ─── Database Gate ────────────────────────────────────────────────────────────
// Waits for SQLite to initialize before rendering the app.
// Shows a loading screen and graceful error if DB fails.

function AppContent() {
  const { isReady, error } = useDatabase();
  const { theme } = useTheme();
  const c = theme.colors;

  if (error) {
    return (
      <View style={[styles.splash, { backgroundColor: c.background }]}>
        <Text style={[styles.errorIcon]}>⚠️</Text>
        <Text style={[styles.errorTitle, { color: c.text }]}>
          Startup Error
        </Text>
        <Text style={[styles.errorMsg, { color: c.textSecondary }]}>{error}</Text>
      </View>
    );
  }

  if (!isReady) {
    return (
      <View style={[styles.splash, { backgroundColor: c.background }]}>
        <Text style={[styles.brandText, { color: c.primary }]}>Gem Dictionary</Text>
        <Text style={[styles.brandSub, { color: c.textSecondary }]}>
          English → Hindi Offline Dictionary
        </Text>
        <ActivityIndicator
          size="large"
          color={c.primary}
          style={{ marginTop: 32 }}
        />
      </View>
    );
  }

  return <AppNavigator />;
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="auto" />
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  brandText: {
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1,
  },
  brandSub: {
    fontSize: 15,
    marginTop: 8,
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  errorMsg: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});
