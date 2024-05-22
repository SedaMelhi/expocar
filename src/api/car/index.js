import { axiosInstance } from '../instance';

export const car = (path) => axiosInstance.get('http://127.0.0.1:8000' + path);
