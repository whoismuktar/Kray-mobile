import axios from "../utils/axios";

export const allGoals = () => {
  return axios.get("/goal/getAllGoals");
};

export const allPlans = () => {
  return axios.get("/health-plan/getAll");
};

export const createGoal = (data) => {
  return axios.post("/goal/addGoal", data);
};

export const createPlan = (data) => {
  return axios.post("/health-plan/add", data);
};

export const allHealthProf = () => {
  return axios.get("/user/getAllUsersByCategory?userCategory=healthprof");
};

export const findUserById = (userId) => {
  return axios.get(`/user/${userId}`);
};
