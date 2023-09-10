import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Stepper from "../../components/Stepper";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import Chip from "../../components/Chip";

const booking = {
  id: 44,
  title: "Online Appointment for Student 2",
  appointmentType: "COUNSELLING",
  bookingType: "ONLINE",
  studentId: 26,
  profId: 2,
  bookingDate: "2023-09-18 12:00:00",
  response: false,
  appointmentComment: null,
  postCode: null,
  address: null,
  phone: null,
  message:
    "I've been experiencing increased anxiety lately and would appreciate your guidance in managing it effectively. Excited to connect with you",
  status: "Requested",
  createdDate: "2023-08-29",
  updatedDate: "2023-08-29",
};

const Plan = () => {
  const [plan, setPlan] = useState({});

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <View style={{ textAlign: "center" }}>
        <ImageBackground
          source={{
            uri: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team2.jpg",
          }}
          imageStyle={{ borderRadius: "100%" }}
          resizeMode="cover"
          style={{ width: 120, height: 120, marginTop: -70 }}
        ></ImageBackground>
      </View>

      <Text type="paragraph3">
        {`${professional.prefix}. ${professional.firstName} ${professional.lastName}`}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BriefcaseIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
        <Text type="paragraph4">{`${proUser.specialization}`}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MapPinIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
        <Text type="paragraph4">{`${professional.location}`}</Text>
      </View>

      <View style={[baseStyle.section, {flexWrap: "wrap"}]}>
        <View>
          <Text weight="medium" type="paragraph3">
            Booking Type
          </Text>
          <Text type="paragraph4">{booking.bookingType}</Text>
        </View>
        <View>
          <Text weight="medium" type="paragraph3">
            Appointment Type
          </Text>
          <Text type="paragraph4">{booking.appointmentType}</Text>
        </View>
        <View>
          <Text weight="medium" type="paragraph3">
            Date
          </Text>
          <Text type="paragraph4">{booking.bookingDate}</Text>
        </View>
        <View>
          <Text weight="medium" type="paragraph3">
            Time
          </Text>
          <Text type="paragraph4">-</Text>
        </View>
      </View>

      <View style={baseStyle.section}>
        <Text type="paragraph4">Time</Text>
      </View>
    </ScrollView>
  );
};

export default Plan;
