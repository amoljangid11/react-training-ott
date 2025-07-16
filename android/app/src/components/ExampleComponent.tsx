import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSizes, spacing } from '../design-tokens';

const ExampleComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Figma Token UI</Text>
      <Text style={styles.bodyText}>This is powered by design tokens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  heading: {
    fontSize: fontSizes.heading,
    color: colors.primary,
    marginBottom: spacing.small,
  },
  bodyText: {
    fontSize: fontSizes.body,
    color: colors.text,
  },
});

export default ExampleComponent;

