import axios from "../utils/axios";

export const createMood = (data) => {
  return axios.post("/mood", data);
};

