import { axiosInstance } from '../instance';

export const auth = (path, params) => axiosInstance.post('http://127.0.0.1:8000' + path, params);
