import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

interface IAddBillProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number; categories: Array<any> } }>;
}

export const AddBillScreen: React.FC<IAddBillProps> = ({
  navigation,
  route,
}) => {
  const { userId, categories } = route.params;
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const goBack = () => {
    navigation.navigate('Home', { userId });
  };

  const handleButtonPress = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Button
          style={styles.backButton}
          labelStyle={styles.backButtonText}
          onPress={goBack}
        >
          {`<- HOME`}
        </Button>
        <View style={styles.pickerView}>
          <RNPickerSelect
            placeholder={{ label: 'Select a Category', value: null }}
            items={categories.map(c => {
              return {
                label: c.name,
                value: c.id,
              };
            })}
            onValueChange={(value: number) => {
              setCategory(value);
            }}
            value={category}
            style={pickerStyle}
          />
          <TextInput
            value={name}
            mode='flat'
            label={'Name'}
            style={styles.input}
            underlineColor='#7F39FB'
            onChangeText={(value: string) => setName(value)}
            autoComplete={false}
            autoCapitalize='none'
          />
          <TextInput
            value={amount.toString()}
            mode='flat'
            label={'Amout'}
            style={styles.input}
            underlineColor='#7F39FB'
            onChangeText={(value: string) => setAmount(parseInt(value))}
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
    position: 'absolute',
    top: 75,
    left: 20,
  },
  backButtonText: {
    color: '#7F39FB',
  },
  pickerView: {
    flex: 1,
    width: '75%',
    marginTop: '55%',
  },
  input: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'transparent',
    color: '#7F39FB',
  },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#7F39FB',
    borderRadius: 4,
    color: '#7F39FB',
    textAlign: 'center',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    color: '#7F39FB',
  },
});
