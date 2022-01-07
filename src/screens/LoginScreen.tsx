import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.loginView}>
        <Text style={styles.header}>BUDJ</Text>
        <TextInput
          value={email}
          mode='flat'
          label='email'
          style={styles.input}
          underlineColor='#7F39FB'
          onChangeText={text => setEmail(text)}
          autoComplete={false}
        />
        <TextInput
          value={password}
          mode='flat'
          label='Password'
          style={styles.input}
          underlineColor='#7F39FB'
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          autoComplete={false}
        />
        <Button
          mode='contained'
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={loginHandler}
        >
          LOG IN
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    backgroundColor: '#03DAC5',
    alignItems: 'center',
  },
  header: {
    marginTop: '45%',
    fontSize: 48,
    letterSpacing: 15,
    color: '#7F39FB',
  },
  input: {
    width: '75%',
    backgroundColor: 'transparent',
    color: '#7F39FB',
  },
  button: {
    marginTop: 40,
    width: 150,
    margin: 10,
  },
  buttonText: {
    color: '#03DAC5',
  },
});
