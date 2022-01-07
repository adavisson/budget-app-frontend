import { apiService } from '../apiService';

type homeApiType = {
  index: (userId: number) => Promise<any>;
};

const homeApi: homeApiType = {
  index: (userId: number) =>
    apiService
      .get(`/users/${userId}`)
      .then(res => res.data)
      .catch(err => console.log(err)),
};

export default homeApi;
