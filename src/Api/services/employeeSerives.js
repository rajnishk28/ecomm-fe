import axiosInstance from '../axiosInstance';
import { ENDPOINTS } from '../endpoint';

// Fetch all employees
export const getAllEmployees = async (token) => {
  const response = await axiosInstance.get(ENDPOINTS.GETALL_EMPLOYEES, {
    headers: {
      Authorization: `${token}`
    },
  });
  return response.data;
};

// Fetch a single employee by ID
export const getEmployeeById = async (id, token) => {
  const response = await axiosInstance.get(`${ENDPOINTS.GET_EMPLOYEE_BY_ID}/${id}`, {
    headers: {
      Authorization: `${token}`
    },
  });
  return response.data;
};

// Create a new employee
export const createEmployee = async (data, token) => {
  const response = await axiosInstance.post(ENDPOINTS.CREATE_EMPLOYEE, data, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

// create new role
export const createNewRole = async (data, token) => {
  const response = await axiosInstance.post(ENDPOINTS.CREATE_NEW_ROLE, data, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

//get all roles
export const getAllRole = async (token) => {
  const response = await axiosInstance.get(ENDPOINTS.GET_ALL_ROLE, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

//Assign Role to a New Employee
export const assignNewRole = async (data, token) => {
  const response = await axiosInstance.post(ENDPOINTS.ASSIGN_NEW_ROLE, data, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

//Filter Employee on the basis of Role
export const filterEmployee = async (data, token) => {
  const response = await axiosInstance.get(`${ENDPOINTS.FILTER_EMPLOYEE}/?role=${data}`, {
    headers: {
      Authorization: `${token}`
    },
  });
  return response.data;
};

// Update an existing employee
export const updateEmployee = async (id, data, token) => {
  const response = await axiosInstance.put(`${ENDPOINTS.UPDATE_EMPLOYEE}/${id}`, data, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

// Delete an employee
export const deleteEmployee = async (id, token) => {
  const response = await axiosInstance.delete(`${ENDPOINTS.DELETE_EMPLOYEE}/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};
