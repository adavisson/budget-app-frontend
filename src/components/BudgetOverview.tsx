import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

export const BudgetOverview: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <VictoryPie
        animate={{ duration: 2000 }}
        radius={100}
        innerRadius={75}
        data={[
          { x: 'Food', y: 35, opacity: 0.9, fill: 'blue' },
          { x: 'Utilities', y: 40, fill: 'red' },
          { x: 'Pokemon\n Cards', y: 55, fill: 'yellow' },
        ]}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
