import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3005',
});

api.interceptors.request.use((config) => {
//   if (localStorage.accessToken) {
//     config.headers.Authorization = `Bearer ${localStorage.accessToken}`;
//   }

  return config;
});