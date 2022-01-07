import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import homeApi from '../util/api/home';
import { Button } from 'react-native-paper';

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { userId: number } }>;
}

type userType = {
  email: string;
  first_name: string;
  last_name: string;
};

export const HomeScreen: React.FC<IHomeScreenProps> = ({
  navigation,
  route,
}) => {
  const { userId } = route.params;
  const [user, setUser] = useState<userType | null>(null);

  const logout = () => {
    return SecureStore.deleteItemAsync('authToken').then(() => {
      navigation.navigate('Login');
    });
  };

  useEffect(() => {
    homeApi
      .index(userId)
      .then(data => setUser(data))
      .catch(() => {
        return navigation.navigate('Login');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        style={styles.logoutButton}
        mode='contained'
        labelStyle={styles.logoutButtonText}
        onPress={logout}
      >
        LOG OUT{' '}
      </Button>
      <Text style={styles.headerText}>Welcome {user?.first_name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03DAC5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#7F39FB',
  },
  logoutButton: {
    position: 'absolute',
    top: 75,
    left: 30,

    // backgroundColor: '#7F39FB',
  },
  logoutButtonText: {
    color: '#03DAC5',
  },
});
