import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: TOKEN && `Bearer ${TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// RESPONSE INTERCEPTOR
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.code === "ERR_NETWORK") {
      console.log("Network erorr");
      const text = error.message;
    }

    return Promise.reject(error);
  }
);

export default instance;
