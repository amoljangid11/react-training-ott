// components/LiveContentWidget.tsx

import React from 'react';
import { Image } from 'react-native';
import { Box, Text, Button, Badge } from '@gluestack-ui/themed';

interface LiveContentProps {
  title: string;
  thumbnail: string;
  onPlay: () => void;
}

export const LiveContentWidget: React.FC<LiveContentProps> = ({ title, thumbnail, onPlay }) => {
  return (
    <Box m="$4" borderWidth={1} borderColor="$red600" borderRadius="$lg" overflow="hidden" bg="$black">
      <Image source={{ uri: thumbnail }} style={{ width: '100%', height: 180 }} />
      <Box p="$3">
        <Badge bgColor='red'>LIVE</Badge>
        <Text mt="$2" size="md" color="$white">{title}</Text>
        <Button mt="$2" onPress={onPlay} variant="solid" bg="$red600">
          Play Now
        </Button>
      </Box>
    </Box>
  );
};
