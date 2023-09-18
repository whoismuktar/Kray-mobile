import axios from "../utils/axios";

export const createGoal = (credentials) => {
  return axios.post("/goal", credentials);
};

export const rescheduleGoal = () => {
  return axios.post("/goal");
};

export const acceptGoal = () => {
  return axios.put("/goal");
};

export const declineGoal = () => {
  return axios.put("/goal");
};

export const getGoals = () => {
  return axios.get("/goals");
};

export const getGoalByStatus = (status) => {
  return axios.get(`/goals/${status}`;
};

export const getGoalById = (id) => {
  return axios.get(`/goals/${id}`);
};

export const getGoalByTitle = (title) => {
  return axios.get(`/goals/${title}`);
};

