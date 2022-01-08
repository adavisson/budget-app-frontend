import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

interface ISignUpScreenProps {}

export const SignUpScreen: React.FC<ISignUpScreenProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [emailConfirmation, setEmailConfirmation] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  signUpView: {
    flex: 1,
    backgroundColor: '#03DAC5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#7F39FB',
  },
});
