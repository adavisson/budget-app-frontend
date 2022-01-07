import axios from 'axios';
import Constants from 'expo-constants';

export const apiService = axios.create({
  baseURL: Constants.manifest!.extra!.API_BASE_URL,
});
