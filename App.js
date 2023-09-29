import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigation";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import AppModal from "./src/components/AppModal";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./src/assets/fonts/inter/Inter-Regular.ttf"),
    "Inter-Medium": require("./src/assets/fonts/inter/Inter-Medium.ttf"),
    "Inter-Bold": require("./src/assets/fonts/inter/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Navigator />
      <Toast />
      {/* <AppModal /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
