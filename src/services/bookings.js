import axios from "../utils/axios";

export const createBooking = (credentials) => {
  return axios.post("/booking", credentials);
};

export const rescheduleBooking = () => {
  return axios.post("/booking");
};

export const acceptBooking = () => {
  return axios.put("/booking");
};

export const declineBooking = () => {
  return axios.put("/booking");
};

export const getBookings = () => {
  return axios.get("/bookings");
};

export const getBookingByStatus = (status) => {
  return axios.get(`/bookings/${status}`;
};

export const getBookingById = (id) => {
  return axios.get(`/bookings/${id}`);
};

export const getBookingByTitle = (title) => {
  return axios.get(`/bookings/${title}`);
};

