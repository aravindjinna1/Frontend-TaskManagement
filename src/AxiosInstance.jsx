import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-taskmanagement-uc6c.onrender.com/api" 
});
// https://backend-taskmanagement-uc6c.onrender.com

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
