import React, { useEffect, useState } from 'react';
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
import tokenService from '../util/tokenService';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ILoginScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const LoginScreen: React.FC<ILoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const loginHandler = async () => {
    setLoading(true);
    const response = await loginApi.login(email, password);
    if (!response) {
      setLoading(false);
    }
    await tokenService.storeToken(response.token);
    navigation.navigate('Home', {
      userId: response.user_id,
    });
    setLoading(false);
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
          right={
            <TextInput.Icon
              name={!showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        {/* <TouchableOpacity
          style={styles.showPasswordText}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
        </TouchableOpacity> */}
        <Button
          mode='contained'
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={loginHandler}
        >
          {!loading ? 'LOG IN' : 'SIGNING IN...'}
        </Button>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate('Sign Up')}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
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
  text: {
    color: '#7F39FB',
  },
  signUp: {
    marginTop: 10,
  },
});
