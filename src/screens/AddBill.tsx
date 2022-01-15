import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IAddBillProps {}

export const AddBill: React.FC<IAddBillProps> = () => {
  return (
    <View style={styles.container}>
      <Text>ADD BILL</Text>
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
