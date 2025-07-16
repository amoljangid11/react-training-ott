// // App.tsx   // Day - 1 Design Systems & OTT UI Constructs :

// import React from 'react';
// import { GluestackUIProvider, Text, Box, Button } from '@gluestack-ui/themed';
// import { config } from '@gluestack-ui/config';

// const App = () => {
//   return (
//     <GluestackUIProvider config={config}>
//       <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight0">
//         <Text size="xl" bold>
//           Welcome to Gluestack UI
//         </Text>
//         <Button mt="$4">
//           <Text color="$white">Click Me</Text>
//         </Button>
//       </Box>
//     </GluestackUIProvider>
//   );
// };

// export default App;

// import React from 'react';
// import LoginScreen from './android/app/src/screens/LoginScreen';

// const App = () => {
//   return <LoginScreen />;
// };

// export default App;


// App.tsx

// import React from 'react';
// import { PaperProvider } from 'react-native-paper';
// import { ThemeProvider, useAppTheme } from './src/context/ThemeContext';
// import HomeScreen from './src/screens/HomeScreen';

// const Main = () => {
//   const { theme } = useAppTheme();

//   return (
//     <PaperProvider theme={theme}>
//       <HomeScreen />
//     </PaperProvider>
//   );
// };

// export default function App() {
//   return (
//     <ThemeProvider>
//       <Main />
//     </ThemeProvider>
//   );
// }

import React from 'react';
import { SafeAreaView } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import RailsOTT from './android/app/src/components/RailsOTT';
import type { Category } from './android/app/src/store/types1';

const sampleData: Category[] = [
  {
    id: '1',
    name: 'Trending Now',
    movies: [
      { id: 'm1', title: 'Avengers', thumbnail: 'https://placehold.co/120x180' },
      { id: 'm2', title: 'Spider-Man', thumbnail: 'https://placehold.co/120x180' },
      { id: 'm3', title: 'Batman', thumbnail: 'https://placehold.co/120x180' },
    ],
  },
  {
    id: '2',
    name: 'Action Thrillers',
    movies: [
      { id: 'm4', title: 'John Wick', thumbnail: 'https://placehold.co/120x180' },
      { id: 'm5', title: 'Fast & Furious', thumbnail: 'https://placehold.co/120x180' },
    ],
  },
];

export default function App() {
  const handleMoviePress = (movie: any) => {
    console.log('Selected Movie:', movie);
  };

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <RailsOTT data={sampleData} onMoviePress={handleMoviePress} />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

