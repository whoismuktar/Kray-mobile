import axios from "../utils/axios";

export const allGoals = () => {
  return axios.get("/goal/getAllGoals" );
};


export const allPlans = () => {
  return axios.get("/health-plan/getAll" );
};

