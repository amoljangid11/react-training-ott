// src/theme/themes.ts

import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { AppTheme } from './types';

export const lightTheme: AppTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
  },
  customColors: {
    header: '#eeeeee',
    card: '#f5f5f5',
  },
};

export const darkTheme: AppTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    surface: '#121212',
    text: '#ffffff',
  },
  customColors: {
    header: '#1f1f1f',
    card: '#2c2c2c',
  },
};
