// ─── Favorites Screen ─────────────────────────────────────────────────────────

import React, { useState, useCallback, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTheme } from '../hooks/useTheme';
import { ThemedView } from '../components/ThemedView';
import { WordListItem } from '../components/WordListItem';
import { EmptyState } from '../components/EmptyState';
import { favoritesRepository } from '../repositories/FavoritesRepository';
import { spacing, maxContentWidth } from '../theme/spacing';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Favorite } from '../types';

type FavNavProp = NativeStackNavigationProp<RootStackParamList>;

export function FavoritesScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation<FavNavProp>();
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, maxContentWidth);

  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const favs = await favoritesRepository.getAllFavorites();
      setFavorites(favs);
    } catch (err) {
      console.error('[FavoritesScreen] load error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  // Reload when screen comes into focus
  useEffect(() => {
    const unsub = navigation.addListener('focus', load);
    return unsub;
  }, [navigation, load]);

  return (
    <ThemedView variant="background" style={styles.flex}>
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <FlatList
          data={favorites}
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
          ListEmptyComponent={
            !loading ? (
              <EmptyState
                icon="⭐"
                title="No favorite words yet"
                subtitle="Save useful words here for quick revision."
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
});
