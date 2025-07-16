import { Theme } from 'react-native-paper';

export interface AppTheme extends Theme {
  customColors: {
    header: string;
    card: string;
  };
}
