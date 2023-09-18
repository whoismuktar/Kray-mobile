import axios from "../utils/axios";

export const login = (credentials) => {
  return axios.post("/auth/login", credentials);
};

export const register = (credentials) => {
  return axios.post("/auth/signup", credentials);
};

