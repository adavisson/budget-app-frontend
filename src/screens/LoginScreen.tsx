import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import loginApi from '../util/api/login';

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginHandler = () => {
    loginApi.login(email, password).then(resp => setToken(resp.token));
  };

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
          autoCapitalize='none'
        />
        <TextInput
          value={password}
          mode='flat'
          label='Password'
          style={styles.input}
          underlineColor='#7F39FB'
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
          autoComplete={false}
        />
        <TouchableOpacity
          style={styles.showPasswordText}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
        </TouchableOpacity>
        <Button
          mode='contained'
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={loginHandler}
        >
          LOG IN
        </Button>
        {token ? <Text>{token}</Text> : null}
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
  showPasswordText: {
    marginTop: 20,
  },
});
