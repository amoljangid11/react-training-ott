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

import React from 'react';
import LoginScreen from './android/app/src/screens/LoginScreen';

const App = () => {
  return <LoginScreen />;
};

export default App;
