import axiosInstance from '../axiosInstance';
import { ENDPOINTS } from '../endpoint';


export const verifyEmail = async (data) => {
  const response = await axiosInstance.post(ENDPOINTS.VERIFYEMAIL, data);
  return response.data;
};

export const verifyOtp = async (data) => {
  const response = await axiosInstance.post(ENDPOINTS.VERIFYOTP, data);
  return response.data;
};

export const uploadfile = async (data) => {
  const response = await axiosInstance.post(ENDPOINTS.UPLOADFILE, data);
  return response.data;
};

export const organisationRegister = async (data) => {
  const response = await axiosInstance.post(ENDPOINTS.ORGANISATIONREGISTER, data);
  return response.data;
};

export const Adminlogin = async (data) => {
  const response = await axiosInstance.post(ENDPOINTS.ADMINLOGIN,data);
  return response.data;
};

