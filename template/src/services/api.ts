import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

api.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    return Promise.reject(error);
  },
);


export default api;
