import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { baseStyle } from "../../../assets/styles/base";
import BookingView from "../../../components/Booking";

const Plan = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <BookingView isRequest={true} />
    </ScrollView>
  );
};

export default Plan;
