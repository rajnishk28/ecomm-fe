import axiosInstance from '../axiosInstance';
import { ENDPOINTS } from '../endpoint';

export const getProfile = async (token) => {

  const response = await axiosInstance.get(ENDPOINTS.GETPROFILE, {
    headers: {
      Authorization: `${token}`
    },
    // withCredentials: true,
  });

  return response.data;
};

export const updateProfile = async (data, token) => {
  const response = await axiosInstance.put(ENDPOINTS.UPDATEPROFILE, data, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

export const changePassword = async (data, token) => {
  const response = await axiosInstance.post(ENDPOINTS.CHANGEPASSWORD, data, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};
