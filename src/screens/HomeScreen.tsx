import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

export const HomeScreen: React.FC<IHomeScreenProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome Home Andrew!</Text>
      <Text>{userId}</Text>
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
