// ─── History Screen ───────────────────────────────────────────────────────────

import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/useTheme';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { WordListItem } from '../components/WordListItem';
import { EmptyState } from '../components/EmptyState';
import { historyRepository } from '../repositories/HistoryRepository';
import { spacing, maxContentWidth, borderRadius } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { RootStackParamList } from '../navigation/AppNavigator';
import { SearchHistoryEntry } from '../types';

type HistNavProp = NativeStackNavigationProp<RootStackParamList>;

export function HistoryScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<HistNavProp>();
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, maxContentWidth);

  const [history, setHistory] = useState<SearchHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const h = await historyRepository.getHistory();
      setHistory(h);
    } catch (err) {
      console.error('[HistoryScreen] load error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    const unsub = navigation.addListener('focus', load);
    return unsub;
  }, [navigation, load]);

  const handleClear = useCallback(() => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear your search history?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await historyRepository.clearHistory();
            setHistory([]);
          },
        },
      ]
    );
  }, []);

  return (
    <ThemedView variant="background" style={styles.flex}>
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <FlatList
          data={history}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <WordListItem
              word={item.word}
              onPress={() =>
                navigation.navigate('WordDetail', {
                  wordId: item.wordId,
                  word: item.word.word,
                })
              }
            />
          )}
          contentContainerStyle={[
            styles.listContent,
            { maxWidth: contentWidth, alignSelf: 'center', width: '100%' },
          ]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            history.length > 0 ? (
              <View style={styles.headerRow}>
                <ThemedText variant="caption" style={{ color: c.textSecondary }}>
                  {history.length} recent word{history.length !== 1 ? 's' : ''}
                </ThemedText>
                <TouchableOpacity
                  onPress={handleClear}
                  style={[styles.clearBtn, { backgroundColor: c.error + '15', borderColor: c.error + '40' }]}
                  accessibilityLabel="Clear search history"
                  accessibilityRole="button"
                >
                  <Ionicons name="trash-outline" size={14} color={c.error} />
                  <ThemedText style={{ color: c.error, fontSize: fontSize.sm, fontWeight: fontWeight.semiBold, marginLeft: 4 }}>
                    Clear All
                  </ThemedText>
                </TouchableOpacity>
              </View>
            ) : null
          }
          ListEmptyComponent={
            !loading ? (
              <EmptyState
                icon="🕘"
                title="No search history"
                subtitle="Words you look up will appear here."
              />
            ) : null
          }
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  listContent: {
    paddingHorizontal: spacing['5'],
    paddingTop: spacing['4'],
    paddingBottom: spacing['10'],
    flexGrow: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing['4'],
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing['3'],
    paddingVertical: spacing['1'] + 2,
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
});
