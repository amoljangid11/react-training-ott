// components/FeaturedContentWidget.tsx
import React from 'react';
import { Image } from 'react-native';
import { Box, Text, Button } from '@gluestack-ui/themed';

interface FeaturedContentProps {
  title: string;
  imageUrl: string;
  onWatchPress: () => void;
}

export const FeaturedContentWidget: React.FC<FeaturedContentProps> = ({ title, imageUrl, onWatchPress }) => {
  return (
    <Box m="$4" borderRadius="$lg" overflow="hidden" bg="$gray900">
      <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 200 }} />
      <Box p="$4">
        <Text size="xl" fontWeight="bold" color="$white">{title}</Text>
        <Button mt="$2" onPress={onWatchPress}>Watch Now</Button>
      </Box>
    </Box>
  );
};
