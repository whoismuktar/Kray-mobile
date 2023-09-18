import axios from "../utils/axios";

export const createPlan = (credentials) => {
  return axios.post("/plan", credentials);
};

export const reschedulePlan = () => {
  return axios.post("/plan");
};

export const acceptPlan = () => {
  return axios.put("/plan");
};

export const declinePlan = () => {
  return axios.put("/plan");
};

export const getPlans = () => {
  return axios.get("/plans");
};

export const getPlanByStatus = (status) => {
  return axios.get(`/plans/${status}`;
};

export const getPlanById = (id) => {
  return axios.get(`/plans/${id}`);
};

export const getPlanByTitle = (title) => {
  return axios.get(`/plans/${title}`);
};

