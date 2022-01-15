import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IAddCategoryProps {}

export const AddCategory: React.FC<IAddCategoryProps> = () => {
  return (
    <View style={styles.container}>
      <Text>ADD CATEGORY</Text>
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
});
