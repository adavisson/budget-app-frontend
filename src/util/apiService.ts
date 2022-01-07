import axios from 'axios';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const apiService = axios.create({
  baseURL: Constants.manifest!.extra!.API_BASE_URL,
});

apiService.interceptors.request.use(async config => {
  const token = await SecureStore.getItemAsync('authToken');

  if (token) {
    config.headers!.Authorization = token;
  }

  return config;
});

export { apiService };
