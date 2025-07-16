// screens/HomeScreen.tsx

import React from 'react';
import { ScrollView } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import { FeaturedContentWidget } from '../components/FeaturedContentWidget';
import { LiveContentWidget } from '../components/LiveContentWidget';
import { ActionButtonWidget } from '../components/ActionButtonWidget';

export const HomeScreen: React.FC = () => {
    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

  return (
    <ScrollView>
      <Box bg="$gray800" flex={1}>
        <FeaturedContentWidget
          title="Avengers: Endgame"
          imageUrl="https://yourcdn.com/avengers.jpg"
          onWatchPress={() => alert('Start Playing!')}
        />
        
        <LiveContentWidget
          title="Live Sports: Football Finals"
          thumbnail="https://yourcdn.com/live-football.jpg"
          onPlay={() => alert('Live Stream Started')}
        />
        
        <Box flexDirection="row" justifyContent="space-around">
          <ActionButtonWidget iconName="add" label="Watchlist" onPress={() => alert('Added!')} />
          <ActionButtonWidget iconName="share-social" label="Share" onPress={() => alert('Shared!')} />
        </Box>
      </Box>
    </ScrollView>
  );
};
