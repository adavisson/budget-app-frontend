import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

interface ICreateBudgetScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

export const CreateBudgetScreen: React.FC<ICreateBudgetScreenProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;
  const [income, setIncome] = useState<string>('0');

  const goHome = () => {
    navigation.navigate('Home', { userId });
  };

  const handleButtonPress = () => {};

  return (
    <View style={styles.createBudgetView}>
      <Button
        style={styles.homeButton}
        labelStyle={styles.homeButtonText}
        onPress={goHome}
      >
        {'< Home'}
      </Button>
      <TextInput
        value={income}
        mode='flat'
        label={'income'}
        style={styles.input}
        underlineColor='#7F39FB'
        onChangeText={value => setIncome(value.replace(/0(.)00/, ''))}
        autoComplete={false}
        autoCapitalize='none'
        keyboardType='numeric'
      />
      <Button
        mode='contained'
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={handleButtonPress}
      >
        SUBMIT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  createBudgetView: {
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
  homeButton: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  homeButtonText: {
    color: '#7F39FB',
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
