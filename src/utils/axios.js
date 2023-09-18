import axios from "axios";

const TOKEN = "";
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
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(Object.keys(error));
    console.log("msg", error.message);
    console.log({ error });

    if (error.code === "ERR_NETWORK") {
      console.log("Network erorr");
      const text = error.message;
    }

    // if (error.response.status === 401) {
    // console.log("No auth");

    // localStorage.removeItem("auth_token");
    // }
    return Promise.reject(error);
  }
);

export default instance;
