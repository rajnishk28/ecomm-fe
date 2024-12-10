import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://product-ecom-backend.vercel.app',
});

export default axiosInstance;
