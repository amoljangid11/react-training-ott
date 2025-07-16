// components/ActionButtonWidget.tsx

import React from 'react';
import { Button, Icon, Text } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

interface ActionButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}

export const ActionButtonWidget: React.FC<ActionButtonProps> = ({ iconName, label, onPress }) => {
  return (
    <Button variant="outline" onPress={onPress} m="$2" p="$3">
      <Icon as={Ionicons} name={iconName} size='30' mr="$2" />
      <Text>{label}</Text>
    </Button>
  );
};
