import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface ICreateBudgetScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

export const CreateBudgetScreen: React.FC<ICreateBudgetScreenProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;

  const goHome = () => {
    navigation.navigate('Home', { userId });
  };

  return (
    <View style={styles.createBudgetView}>
      <Button
        style={styles.backButton}
        labelStyle={styles.backButtonText}
        onPress={goHome}
      >
        {'< Home'}
      </Button>
      <Text>CREATE A BUDGET</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  createBudgetView: {
    flex: 1,
    backgroundColor: '#03DAC5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  backButtonText: {
    color: '#7F39FB',
  },
});
