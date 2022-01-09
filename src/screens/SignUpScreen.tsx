import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import signupApi from '../util/api/signup';
import tokenService from '../util/tokenService';

interface ISignUpScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const SignUpScreen: React.FC<ISignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [emailConfirmation, setEmailConfirmation] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      value: email,
      label: 'email',
      setter: setEmail,
      secure: false,
    },
    {
      value: emailConfirmation,
      label: 'email confirmation',
      setter: setEmailConfirmation,
      secure: false,
    },
    {
      value: firstName,
      label: 'first name',
      setter: setFirstName,
      secure: false,
    },
    {
      value: lastName,
      label: 'last name',
      setter: setLastName,
      secure: false,
    },
    {
      value: password,
      label: 'password',
      setter: setPassword,
      secure: true,
    },
    {
      value: passwordConfirmation,
      label: 'password confirmation',
      setter: setPasswordConfirmation,
      secure: true,
    },
  ];

  const getButtonText = () => (step < 5 ? 'NEXT' : 'SUBMIT');

  const handleButtonPress = () => {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      submitUser();
    }
  };

  const handleBackButtonPress = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const submitUser = async () => {
    const response = await signupApi.signup(
      email,
      firstName,
      lastName,
      password,
      passwordConfirmation,
    );
    await tokenService.storeToken(response.token);
    return navigation.navigate('Home', {
      userId: response.user_id,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <TextInput
          value={steps[step].value}
          mode='flat'
          label={steps[step].label}
          style={styles.input}
          underlineColor='#7F39FB'
          onChangeText={text => steps[step].setter(text)}
          autoComplete={false}
          autoCapitalize='none'
          secureTextEntry={steps[step].secure}
        />
        <Button
          mode='contained'
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={handleButtonPress}
        >
          {getButtonText()}
        </Button>
        {step > 0 ? (
          <TouchableOpacity onPress={handleBackButtonPress}>
            <Text style={styles.backButton}>{'<- Back'}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  signUpView: {
    flex: 1,
    backgroundColor: '#03DAC5',
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    width: 150,
    margin: 10,
  },
  buttonText: {
    color: '#03DAC5',
  },
  backButton: {
    color: '#7F39FB',
  },
  input: {
    marginTop: '55%',
    width: '75%',
    backgroundColor: 'transparent',
    color: '#7F39FB',
  },
});
