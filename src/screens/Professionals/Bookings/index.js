import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { baseStyle } from "../../../assets/styles/base";

import Booking from "../../../components/Booking";

const Plan = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <Booking />
    </ScrollView>
  );
};

export default Plan;
