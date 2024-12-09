import axiosInstance from '../axiosInstance';
import { ENDPOINTS } from '../endpoint';

export const login = async (data) => {
    const response = await axiosInstance.post(ENDPOINTS.LOGIN, data);
    return response.data;
};
export const Signup = async (data) => {
    const response = await axiosInstance.post(ENDPOINTS.SIGNUP, data);
    return response.data;
};