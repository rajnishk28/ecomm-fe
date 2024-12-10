import axiosInstance from '../axiosInstance';
import { ENDPOINTS } from '../endpoint';

export const getAllProduct = async () => {
  const response = await axiosInstance.get(ENDPOINTS.VIEWALLPRODUCT);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`${ENDPOINTS.VIEWPRODUCTID}/${id}`);
  return response.data;
};

export const addToCart = async (data) => {
  const response = await axiosInstance.get(`ENDPOINTS.ADDTOCART`, { data });
  return response.data;
};