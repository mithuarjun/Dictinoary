// ─── App Navigator ────────────────────────────────────────────────────────────

import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { useTheme } from '../hooks/useTheme';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchResultsScreen } from '../screens/SearchResultsScreen';
import { WordDetailScreen } from '../screens/WordDetailScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { WordOfDayScreen } from '../screens/WordOfDayScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StudentDictionaryScreen } from '../screens/StudentDictionaryScreen';

// ─── Route param list ─────────────────────────────────────────────────────────
export type RootStackParamList = {
  Main: undefined;
  SearchResults: { query?: string };
  WordDetail: { wordId: number; word: string };
  Favorites: undefined;
  History: undefined;
  WordOfDay: undefined;
  Settings: undefined;
  StudentDictionary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const { theme } = useTheme();
  const c = theme.colors;

  const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: c.surface,
    },
    headerTintColor: c.text,
    headerTitleStyle: {
      fontWeight: '700',
      fontSize: 17,
      color: c.text,
    },
    headerShadowVisible: false,
    contentStyle: { backgroundColor: c.background },
    animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
    gestureEnabled: true,
  };

  const linking = {
    prefixes: ['gemdictionary://', 'http://localhost:8081', 'http://localhost:19006'],
    config: {
      screens: {
        Main: '',
        StudentDictionary: 'student-dictionary',
        SearchResults: 'search',
        WordDetail: 'word/:wordId',
        Favorites: 'favorites',
        History: 'history',
        WordOfDay: 'word-of-the-day',
        Settings: 'settings',
      },
    },
  };

  return (
    <NavigationContainer
      linking={linking}
      theme={{
        dark: theme.isDark,
        colors: {
          primary: c.primary,
          background: c.background,
          card: c.surface,
          text: c.text,
          border: c.border,
          notification: c.primary,
        },
        fonts: {
          regular: { fontFamily: 'System', fontWeight: '400' },
          medium: { fontFamily: 'System', fontWeight: '500' },
          bold: { fontFamily: 'System', fontWeight: '700' },
          heavy: { fontFamily: 'System', fontWeight: '800' },
        },
      }}
    >
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentDictionary"
          component={StudentDictionaryScreen}
          options={{
            title: 'Student Dictionary (1–10)',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WordDetail"
          component={WordDetailScreen}
          options={({ route }) => ({
            headerShown: false,
            title: route.params.word,
          })}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: 'Favorites',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: 'Search History',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="WordOfDay"
          component={WordOfDayScreen}
          options={{
            title: 'Word of the Day',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
