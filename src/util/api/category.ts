import { apiService } from '../apiService';

type categoryApiType = {
  create: (
    userId: number,
    name: string,
    color: string,
  ) => Promise<{ id: number; name: string; color: string }>;
};

const categoryApi: categoryApiType = {
  create: (userId: number, name: string, color: string) =>
    apiService
      .post('/categories', { user_id: userId, name, color })
      .then(res => res.data)
      .catch(err => console.error(err)),
};

export default categoryApi;
