// RailsOTT.tsx

import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, Box, VStack, HStack } from '@gluestack-ui/themed';
import type { Category, Movie } from '../store/types1';

type Props = {
  data: Category[];
  onMoviePress: (movie: Movie) => void;
};

const RailsOTT: React.FC<Props> = ({ data, onMoviePress }) => {
  const renderMovie = ({ item }: { item: Movie }) => (
    <TouchableOpacity onPress={() => onMoviePress(item)}>
      <Box mr="$4">
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: 120, height: 180, borderRadius: 8 }}
        />
        <Text mt="$1" fontSize="$sm" color="$coolGray500" numberOfLines={1}>
          {item.title}
        </Text>
      </Box>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }: { item: Category }) => (
    <VStack mb="$6">
      <Text fontSize="$lg" fontWeight="$bold" mb="$2">
        {item.name}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={item.movies}
        keyExtractor={(movie) => movie.id}
        renderItem={renderMovie}
      />
    </VStack>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RailsOTT;