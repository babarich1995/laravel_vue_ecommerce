
import axios from "axios";
import router from "./router/index.js";
import { useAuthStore } from './store/authStore';


const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})


axiosClient.interceptors.request.use(config => {
 const store = useAuthStore()
  config.headers.Authorization = `Bearer ${store.token}`
  return config;
})

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('TOKEN')
    router.push({name: 'login'})
  }
  throw error;
})

export default axiosClient;