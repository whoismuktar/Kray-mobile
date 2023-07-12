import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

export const deviceWidth = Dimensions.get("window").width;

export const getFullName = (user) => {
  if (user) {
    return `${user.firstName} ${user.lastName}`;
  }
  return "";
};