import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface IAddCategoryProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

export const AddCategoryScreen: React.FC<IAddCategoryProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;

  const goBack = () => {
    navigation.navigate('Home', { userId });
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.backButton}
        labelStyle={styles.backButtonText}
        onPress={goBack}
      >
        {`< HOME`}
      </Button>
      <Text style={styles.headerText}>ADD CATEGORY</Text>
    </View>
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
  backButton: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  backButtonText: {
    color: '#7F39FB',
  },
});
