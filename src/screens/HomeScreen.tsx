import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <StatusBar style='auto' />
      <View style={styles.loginButton}>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    position: 'relative',
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff',
  },
});
