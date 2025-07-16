import React, { useState } from 'react';
import {
  GluestackUIProvider,
  Box,
  Text,
  Input,
  InputField,
  Button,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const LoginScreen = () => {
  const [email, setEmail] = useState('');  // email is the state
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} justifyContent="center" px="$4" bg="$backgroundLight0">
        <Text size="2xl" bold mb="$4">
          Login
        </Text>
        <Input variant="outline" size="md" mb="$4">
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </Input>
        <Input variant="outline" size="md" mb="$4">
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Input>
        <Button onPress={handleLogin}>
          <Text color="$white">Login</Text>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
};

export default LoginScreen;
