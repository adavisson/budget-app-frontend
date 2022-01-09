import { apiService } from '../apiService';

type budgetApiType = {
  create: (userId: number, income: number) => Promise<{ id: number }>;
};

const budgetApi: budgetApiType = {
  create: (userId: number, income: number) =>
    apiService
      .post('/budgets', { user_id: userId, income })
      .then(res => res.data)
      .catch(err => console.error(err)),
};

export default budgetApi;
