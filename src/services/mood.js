import axios from "../utils/axios";

export const createMood = (credentials) => {
  return axios.post("/mood", credentials);
};

export const rescheduleMood = () => {
  return axios.post("/mood");
};

export const acceptMood = () => {
  return axios.put("/mood");
};

export const declineMood = () => {
  return axios.put("/mood");
};

export const getMoods = () => {
  return axios.get("/moods");
};

export const getMoodByStatus = (status) => {
  return axios.get(`/moods/${status}`;
};

export const getMoodById = (id) => {
  return axios.get(`/moods/${id}`);
};

export const getMoodByTitle = (title) => {
  return axios.get(`/moods/${title}`);
};

