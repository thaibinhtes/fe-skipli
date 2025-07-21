// src/services/apiClient.ts
import axios from 'axios';
import { deleteTokenAuth, getTokenAuth } from '../utils';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getTokenAuth()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      deleteTokenAuth()
    }
    return Promise.reject({
      status: 401,
      message: error
    });
  }
);

export default apiClient;
