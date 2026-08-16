// ─── Student Dictionary Screen ────────────────────────────────────────────────
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '../components/ThemedView';
import { StudentDictionary } from '../components/StudentDictionary';

export function StudentDictionaryScreen() {
  return (
    <ThemedView variant="background" style={styles.container}>
      <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
        <StudentDictionary />
      </SafeAreaView>
    </ThemedView>
  );
}

export default StudentDictionaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
