// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../theme/themes';
import { AppTheme } from '../theme/types';
import { useColorScheme } from 'react-native';

interface ThemeContextProps {
  theme: AppTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme();
  const isSystemDark = systemScheme === 'dark';

  const [isDark, setIsDark] = useState<boolean>(isSystemDark);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};
