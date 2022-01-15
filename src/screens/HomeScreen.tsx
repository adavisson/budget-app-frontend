import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import homeApi from '../util/api/home';
import { Button } from 'react-native-paper';
import tokenService from '../util/tokenService';
import { BudgetOverview } from '../components/BudgetOverview';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

type userType = {
  email: string;
  first_name: string;
  last_name: string;
  budget: any;
};

export const HomeScreen: React.FC<IHomeScreenProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;
  const [user, setUser] = useState<userType | null>(null);

  const logout = async () => {
    return tokenService.logout().then(() => {
      navigation.navigate('Login');
    });
  };

  const handleCreateBudget = async () => {
    navigation.navigate('Create Budget', { userId });
  };

  useEffect(() => {
    homeApi
      .index(userId)
      .then(data => setUser(data))
      .catch(() => {
        return navigation.navigate('Login');
      });
  }, []);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.logoutButton}
        labelStyle={styles.logoutButtonText}
        onPress={logout}
      >
        LOG OUT
      </Button>
      <Text style={styles.headerText}>Welcome {user?.first_name}!</Text>
      {user.budget ? (
        <BudgetOverview />
      ) : (
        <Button
          style={styles.createBudgetButton}
          mode='contained'
          labelStyle={styles.createButtonText}
          onPress={handleCreateBudget}
        >
          CREATE A BUDGET
        </Button>
      )}
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
  logoutButton: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  createBudgetButton: {
    marginTop: 40,
  },
  createButtonText: {
    color: '#03DAC5',
  },
  logoutButtonText: {
    color: '#7F39FB',
  },
});
