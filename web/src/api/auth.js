import { httpClient } from "../utils/httpClient";

export const login = async (data) => {
  return httpClient.post(`/login`, data);
};
