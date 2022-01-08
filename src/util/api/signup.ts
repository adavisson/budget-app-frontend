import { apiService } from '../apiService';

type signupApiType = {
  signup: (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirmation: string,
  ) => Promise<{ user_id: number; token: string }>;
};

const signupApi: signupApiType = {
  signup: (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirmation: string,
  ) =>
    apiService
      .post('/users', {
        email,
        first_name: firstName,
        last_name: lastName,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(res => res.data)
      .catch(err => console.error(err)),
};

export default signupApi;
