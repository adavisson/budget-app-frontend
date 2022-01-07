import { apiService } from '../apiService';

type loginApiType = {
  login: (
    email: string,
    password: string,
  ) => Promise<{ user_id: number; token: string }>;
};

const loginApi: loginApiType = {
  login: (email: string, password: string) =>
    apiService
      .post('/login', { email, password })
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err)),
};

export default loginApi;
