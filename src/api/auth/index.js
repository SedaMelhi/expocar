import { axiosInstance } from '../instance';

export const auth = (params) => axiosInstance.post('http://127.0.0.1:8000/api/users/', params);
