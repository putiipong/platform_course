import { httpClient } from "../utils/httpClient";

export const getAllCourse = async () => {
  return httpClient.get(`/course`);
};
export const getCourseById = async (id) => {
  return httpClient.get(`/course/${id}`);
};
export const createCourse = async (data) => {
  return httpClient.post(`/course`, data);
};
export const updateCourse = async (id, data) => {
  return httpClient.put(`/course/${id}`, data);
};
export const deleteCourse = async (id) => {
  return httpClient.delete(`/course/${id}`);
};
