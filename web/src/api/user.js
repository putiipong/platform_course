import { httpClient } from "../utils/httpClient";

export const getUserById = async (id) => {
  return httpClient.get(`/user/${id}`);
};
export const register = async (data) => {
  return httpClient.post(`/register`, data);
};
export const updateUser = async (data) => {
  return httpClient.put(`/course/${data.id}`, data);
};
export const deleteUser = async (id) => {
  return httpClient.delete(`/user/${id}`);
};
