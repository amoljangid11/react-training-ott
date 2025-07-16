// src/screens/HomeScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useAppTheme } from '../context/ThemeContext';

const HomeScreen = () => {
  const { toggleTheme, isDark } = useAppTheme();
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text variant="titleLarge" style={{ color: theme.colors.text }}>
        Current Theme: {isDark ? 'Dark' : 'Light'}
      </Text>
      <Button mode="contained" onPress={toggleTheme} style={{ marginTop: 20 }}>
        Toggle Theme
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
