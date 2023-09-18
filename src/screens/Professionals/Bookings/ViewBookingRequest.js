import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import Text from "../../../components/Text";
import { baseStyle } from "../../../assets/styles/base";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Stepper from "../../../components/Stepper";
import BookingView from "../../../components/Booking";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import Chip from "../../../components/Chip";
import { BriefcaseIcon, MapPinIcon } from "react-native-heroicons/outline";

const Plan = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <BookingView isRequest={true} />
    </ScrollView>
  );
};

export default Plan;
