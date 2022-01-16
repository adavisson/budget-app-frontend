import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import categoryApi from '../util/api/category';

interface IAddCategoryProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

export const AddCategoryScreen: React.FC<IAddCategoryProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;
  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      value: name,
      label: 'category name',
      setter: setName,
    },
    {
      value: color,
      label: 'category color',
      setter: setColor,
    },
  ];

  const goBack = () => {
    navigation.navigate('Home', { userId });
  };

  const handleSubmit = () => {
    categoryApi
      .create(userId, name, color)
      .then(data => console.log(data))
      .then(() => navigation.navigate('Home', { userId }));
  };

  const handleButtonPress = () => {
    if (step < 1) {
      setStep(step + 1);
    } else if (step === 1) {
      handleSubmit();
    }
  };

  const handleBackButtonPress = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const getButtonText = () => (step < 1 ? 'NEXT' : 'SUBMIT');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Button
          style={styles.goBackButton}
          labelStyle={styles.goBackButtonText}
          onPress={goBack}
        >
          {`<- HOME`}
        </Button>
        <TextInput
          value={steps[step].value}
          mode='flat'
          label={steps[step].label}
          style={styles.input}
          underlineColor='#7F39FB'
          onChangeText={value => steps[step].setter(value)}
          autoComplete={false}
          autoCapitalize='none'
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03DAC5',
    alignItems: 'center',
  },
  headerText: {
    marginTop: '45%',
    fontSize: 24,
    color: '#7F39FB',
  },
  goBackButton: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  goBackButtonText: {
    color: '#7F39FB',
  },
  input: {
    marginTop: '55%',
    width: '75%',
    backgroundColor: 'transparent',
    color: '#7F39FB',
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
});
