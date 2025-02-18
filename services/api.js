import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

// Interceptor untuk error handling global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.status, error?.message);
    return Promise.reject(error);
  }
);

export default api;