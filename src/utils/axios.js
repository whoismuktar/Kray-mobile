import axios from "axios";

const TOKEN = "";
const baseURL = "http://192.168.1.7:8080/api/v1";

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: TOKEN && `Bearer ${TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

console.log(process.env);
// console.log({baseURL});
console.log(axios.defaults);

// RESPONSE INTERCEPTOR
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log({ response });
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.log("err msg", error.response.message);

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

instance.interceptors.request.use(
  function (request) {
    // console.log("=================");
    // console.log("=================");
    // console.log({ request });
    // console.log("=================");
    // console.log("=================");
    // console.log("=================");

    return request;
  },
  function (error) {
    // console.log({ int: error });

    return request;
  }
);

export default instance;
