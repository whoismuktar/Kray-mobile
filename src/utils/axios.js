import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://172.20.10.4:8080/api/v1";

const instance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

// Create a function to set the Authorization header with the stored token
const setAuthorizationHeader = async () => {
  try {
    const access_token = await AsyncStorage.getItem("access_token");
    if (access_token) {
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
    } else {
      // Handle the case when the token is not found in AsyncStorage
      // You can log an error or perform other actions here
    }
  } catch (error) {
    // Handle errors here
    console.error("Error setting Authorization header:", error);
  }
};

// Call the setAuthorizationHeader function to set the initial header
setAuthorizationHeader();

export default instance;
