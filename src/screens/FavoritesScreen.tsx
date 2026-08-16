// ─── Favorites Screen ─────────────────────────────────────────────────────────

import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  Platform,
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
import { favoritesRepository } from '../repositories/FavoritesRepository';
import { spacing, maxContentWidth, borderRadius } from '../theme/spacing';
import { fontSize, fontWeight } from '../theme/typography';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Favorite } from '../types';

type FavNavProp = NativeStackNavigationProp<RootStackParamList>;

export function FavoritesScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
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

  useEffect(() => {
    load();
  }, [load]);

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
      <SafeAreaView
        style={[styles.flex, { paddingTop: Platform.OS === 'android' ? 12 : 0 }]}
        edges={['top', 'left', 'right']}
      >
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
          ListHeaderComponent={
            <View style={styles.header}>
              <ThemedText style={[styles.title, { color: c.text }]}>
                Favorites
              </ThemedText>
              <ThemedText style={{ color: c.textSecondary, fontSize: 12, marginTop: 1 }}>
                {favorites.length > 0
                  ? `${favorites.length} saved word${favorites.length !== 1 ? 's' : ''}`
                  : 'Your saved vocabulary collection'}
              </ThemedText>
            </View>
          }
          ListEmptyComponent={
            !loading ? (
              <EmptyState
                icon="☆"
                title="No saved words yet"
                subtitle="Search for a word and tap the star to save it here."
              />
            ) : null
          }
        />
      </SafeAreaView>
    </ThemedView>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  listContent: {
    paddingHorizontal: spacing['4'],
    paddingTop: spacing['2'],
    paddingBottom: spacing['12'],
    flexGrow: 1,
  },
  header: {
    marginBottom: spacing['3'],
    marginTop: spacing['1'],
  },
  title: {
    fontSize: 22,
    fontWeight: fontWeight.extraBold,
    letterSpacing: -0.4,
    lineHeight: 28,
  },
});
