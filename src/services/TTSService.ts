// ─── TTS Service ─────────────────────────────────────────────────────────────
// Wraps expo-speech on Native and window.speechSynthesis on Web for graceful audio pronunciation.

import { Platform } from 'react-native';
import * as Speech from 'expo-speech';

export const ttsService = {
  speak(text: string, onDone?: () => void, onError?: (err: string) => void): void {
    if (Platform.OS === 'web') {
      try {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US';
          utterance.rate = 0.9;
          utterance.onend = () => onDone?.();
          utterance.onerror = (e) => {
            console.warn('[Web TTS] Speech synthesis error:', e);
            onError?.('Pronunciation unavailable in this browser.');
          };
          window.speechSynthesis.speak(utterance);
          return;
        } else {
          onError?.('Pronunciation unavailable in this browser.');
          return;
        }
      } catch (err) {
        console.warn('[Web TTS] Exception:', err);
        onError?.('Pronunciation unavailable in this browser.');
        return;
      }
    }

    // Native Android / iOS Speech
    try {
      Speech.stop();
      Speech.speak(text, {
        language: 'en-US',
        pitch: 1.0,
        rate: 0.85,
        onDone: () => onDone?.(),
        onError: (error) => {
          console.warn('[Native TTS] Error:', error);
          onError?.('Pronunciation unavailable on this device.');
        },
      });
    } catch (error) {
      console.warn('[Native TTS] speak() threw:', error);
      onError?.('Text-to-speech is not available on this device.');
    }
  },

  stop(): void {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }
    try {
      Speech.stop();
    } catch (_) {}
  },

  async isSpeaking(): Promise<boolean> {
    if (Platform.OS === 'web') {
      return typeof window !== 'undefined' && 'speechSynthesis' in window
        ? window.speechSynthesis.speaking
        : false;
    }
    try {
      return await Speech.isSpeakingAsync();
    } catch (_) {
      return false;
    }
  },
};
