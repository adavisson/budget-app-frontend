import * as SecureStore from 'expo-secure-store';

const tokenService = {
  storeToken: async (token: string) => {
    return SecureStore.setItemAsync('authToken', token);
  },
  logout: async () => {
    return SecureStore.deleteItemAsync('authToken');
  },
};

export default tokenService;
