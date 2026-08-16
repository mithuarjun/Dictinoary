// ─── App Navigator (Modern Bottom Tabs + Stack) ──────────────────────────────

import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, LinkingOptions, NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../hooks/useTheme';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchResultsScreen } from '../screens/SearchResultsScreen';
import { WordDetailScreen } from '../screens/WordDetailScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { fontWeight } from '../theme/typography';

// ─── Route param lists ────────────────────────────────────────────────────────
export type MainTabParamList = {
  Home: undefined;
  Search: { query?: string } | undefined;
  Favorites: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  SearchResults: { query?: string };
  WordDetail: { wordId: number; word: string };
  Favorites: undefined;
  History: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabNavigator() {
  const { theme } = useTheme();
  const c = theme.colors;
  const insets = useSafeAreaInsets();

  const tabScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: c.primary,
    tabBarInactiveTintColor: c.textTertiary,
    tabBarStyle: {
      backgroundColor: c.card,
      borderTopColor: c.border,
      borderTopWidth: 1,
      height: Platform.OS === 'android' ? 56 + (insets.bottom > 0 ? insets.bottom : 6) : 54 + insets.bottom,
      paddingTop: 4,
      paddingBottom: Platform.OS === 'android' ? (insets.bottom > 0 ? insets.bottom : 6) : insets.bottom + 4,
      elevation: 6,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: theme.isDark ? 0.2 : 0.05,
      shadowRadius: 6,
    },
    tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: fontWeight.semiBold,
      marginTop: 1,
    },
  };

  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchResultsScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'star' : 'star-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['gemdictionary://', 'http://localhost:8081', 'http://localhost:19006'],
  config: {
    screens: {
      MainTabs: {
        screens: {
          Home: '',
          Search: 'search',
          Favorites: 'favorites',
        },
      },
      SearchResults: 'results',
      WordDetail: 'word/:wordId',
      Favorites: 'all-favorites',
      History: 'history',
      Settings: 'settings',
    },
  },
};

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
          name="MainTabs"
          component={MainTabNavigator}
          options={{ headerShown: false }}
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

export default AppNavigator;
