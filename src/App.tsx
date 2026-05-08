import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const THEMES = {
  paper: {
    bg: '#f5efe3',
    bgGrad: 'linear-gradient(180deg, #f7f1e6 0%, #f0e8d6 100%)',
    card: '#fbf7ef',
    cardBorder: 'rgba(31,26,20,0.06)',
    ink: '#1f1a14',
    ink2: '#4a4338',
    ink3: '#8a7f6e',
    rule: 'rgba(31,26,20,0.10)',
    accent: '#8a3a1f',
    accentSoft: 'rgba(138,58,31,0.08)',
    field: '#ffffff',
    statusDark: false,
  },
  ink: {
    bg: '#14110d',
    bgGrad: 'linear-gradient(180deg, #1a1612 0%, #100d0a 100%)',
    card: '#1f1b16',
    cardBorder: 'rgba(255,250,235,0.06)',
    ink: '#f5efe0',
    ink2: '#bdb29b',
    ink3: '#7a715f',
    rule: 'rgba(255,250,235,0.08)',
    accent: '#e8a96a',
    accentSoft: 'rgba(232,169,106,0.10)',
    field: '#26221c',
    statusDark: true,
  },
  cool: {
    bg: '#eef1f5',
    bgGrad: 'linear-gradient(180deg, #f1f3f7 0%, #e6eaf0 100%)',
    card: '#ffffff',
    cardBorder: 'rgba(15,23,42,0.06)',
    ink: '#0f172a',
    ink2: '#475569',
    ink3: '#94a3b8',
    rule: 'rgba(15,23,42,0.08)',
    accent: '#1d4ed8',
    accentSoft: 'rgba(29,78,216,0.08)',
    field: '#ffffff',
    statusDark: false,
  },
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
