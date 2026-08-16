// ─── Search Results Screen ────────────────────────────────────────────────────

import React, { useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTheme } from '../hooks/useTheme';
import { useSearch } from '../hooks/useSearch';
import { SearchBar } from '../components/SearchBar';
import { WordListItem } from '../components/WordListItem';
import { EmptyState } from '../components/EmptyState';
import { ThemedView } from '../components/ThemedView';
import { spacing, maxContentWidth } from '../theme/spacing';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Word } from '../types';
import { ActivityIndicator } from 'react-native';

type SearchRouteProps = RouteProp<RootStackParamList, 'SearchResults'>;
type SearchNavProp = NativeStackNavigationProp<RootStackParamList, 'SearchResults'>;

export function SearchResultsScreen() {
  const { theme } = useTheme();
  const c = theme.colors;
  const navigation = useNavigation<SearchNavProp>();
  const route = useRoute<SearchRouteProps>();
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, maxContentWidth);

  const { results, isLoading, lastQuery, search, clearSearch } = useSearch();

  const initialQuery = route.params?.query ?? '';
  const [searchText, setSearchText] = React.useState(initialQuery);

  // Run initial search
  useEffect(() => {
    if (initialQuery) {
      search(initialQuery);
    }
  }, [initialQuery]);

  const handleChangeText = useCallback(
    (text: string) => {
      setSearchText(text);
      search(text);
    },
    [search]
  );

  const handleClear = useCallback(() => {
    setSearchText('');
    clearSearch();
  }, [clearSearch]);

  const handleWordPress = useCallback(
    (word: Word) => {
      navigation.navigate('WordDetail', { wordId: word.id, word: word.word });
    },
    [navigation]
  );

  const hasResults = results.length > 0;
  const showEmpty = !isLoading && lastQuery.length > 0 && !hasResults;

  return (
    <ThemedView variant="background" style={styles.flex}>
      <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <View
          style={[
            styles.searchHeader,
            { borderBottomColor: c.divider, backgroundColor: c.surface },
          ]}
        >
          <View style={[styles.searchInner, { maxWidth: contentWidth, width: '100%', alignSelf: 'center' }]}>
            <SearchBar
              value={searchText}
              onChangeText={handleChangeText}
              onSubmit={() => {}}
              onClear={handleClear}
              autoFocus={!initialQuery}
            />
          </View>
        </View>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={c.primary} />
          </View>
        ) : showEmpty ? (
          <EmptyState
            icon="🔍"
            title="Word not found"
            subtitle={`No results for "${lastQuery}". Try another word.`}
          />
        ) : (
          <FlatList
            data={results}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <WordListItem word={item} onPress={() => handleWordPress(item)} />
            )}
            contentContainerStyle={[
              styles.listContent,
              { maxWidth: contentWidth, width: '100%', alignSelf: 'center' },
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              lastQuery.length === 0 ? (
                <EmptyState
                  icon="🔠"
                  title="Start typing"
                  subtitle="Type an English word to search"
                />
              ) : null
            }
          />
        )}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  searchHeader: {
    paddingHorizontal: spacing['5'],
    paddingTop: spacing['3'],
    paddingBottom: spacing['3'],
    borderBottomWidth: 1,
  },
  searchInner: {},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    paddingHorizontal: spacing['5'],
    paddingTop: spacing['4'],
    paddingBottom: spacing['10'],
    flexGrow: 1,
  },
});
