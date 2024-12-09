import { ENDPOINTS } from "../endpoint";
import axiosInstance from "../axiosInstance";


export const ViewCartItems = async (token) => {
    const response = await axiosInstance.post(ENDPOINTS.VIEWCART, {
        headers: {
            Authorization: `${token}`,
        }
    });
    return response.data;
};

export const AddToCart = async (data, token) => {
    const response = await axiosInstance.post(ENDPOINTS.ADDTOCART, data, {
        headers: {
            Authorization: `${token}`,
        }
    });
    return response.data;
};
export const DeleteCart = async (id, token) => {
    const response = await axiosInstance.delete(`${ENDPOINTS.DELETECART}/${id}`, {
        headers: {
            Authorization: `${token}`,
        }
    });
    return response.data;
};