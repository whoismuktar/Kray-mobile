import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import Text from "../components/Text";
import { baseStyle } from "../assets/styles/base";
import Button from "../components/Button";
import Input from "../components/Input";
import Stepper from "../components/Stepper";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import Chip from "../components/Chip";
import { BriefcaseIcon, MapPinIcon } from "react-native-heroicons/outline";
import { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { deviceHeight, deviceWidth } from "../utils/helpers";

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
    "I've been experiencing increased anxiety lately and would appreciate your guidance in managing it effectively. Excited to connect with you.",
  status: "Requested",
  createdDate: "2023-08-29",
  updatedDate: "2023-08-29",
};

const Booking = ({ isRequest }) => {
  const [plan, setPlan] = useState({});
  const [statusPick, setStatusPick] = useState("");

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["65%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);

    if (index === -1) {
      setStatusPick("");
    }
  }, []);

  const AcceptHandler = () => (
    <View>
      <Text>Note</Text>
      <View style={{ paddingVertical: 20 }}>
        <Input
          style={{
            height: 200,
            padding: 20,
            borderColor: baseStyle.gray300,
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          placeholder="Write text here..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={`Hi ${"user"}, your requested appointment has been accepted and scheduled for an in-person meeting.

              ${(<Text>Appointment Information</Text>)}
              ${(
                <ul>
                  <li>Address: [Venue Address]</li>
                  <li>Postcode: [Venue postcode]</li>
                  <li>Phone number: [Phone]</li>
                </ul>
              )}
              `}
        />
      </View>

      <Button text="Accept Booking" />
    </View>
  );

  const DeclineHandler = () => (
    <View>
      <Text>Note</Text>
      <View style={{ paddingVertical: 20 }}>
        <Input
          style={{
            height: 200,
            padding: 20,
            borderColor: baseStyle.gray300,
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          placeholder="Write text here..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={`
              Hi ${"user"}, your requested appointment has been accepted and scheduled for an in-person meeting.

              ${(<Text>Appointment Information</Text>)}
              ${(
                <ul>
                  <li>Address: [Venue Address]</li>
                  <li>Postcode: [Venue postcode]</li>
                  <li>Phone number: [Phone]</li>
                </ul>
              )}
              `}
        />
      </View>

      <Button text="Decline Booking" />
    </View>
  );

  const toggleBooking = (mode) => {
    setStatusPick(mode);
  };

  const handleClosePress = () => bottomSheetRef.current.close();

  return (
    <View style={{ paddingBottom: 50 }}>
      <View style={{ alignItems: "center" }}>
        <ImageBackground
          source={{
            uri: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team2.jpg",
          }}
          imageStyle={{ borderRadius: 400 }}
          resizeMode="cover"
          style={{ width: 120, height: 120, marginBottom: 20 }}
        ></ImageBackground>
      </View>

      <Text type="paragraph3" style={{ marginBottom: 10 }}>
        Dr Alex Morgan
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BriefcaseIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
        <Text type="paragraph4">Mental</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MapPinIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
        <Text type="paragraph4">London</Text>
      </View>

      <View
        style={[
          baseStyle.section,
          {
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          },
        ]}
      >
        <View
          style={{
            borderColor: baseStyle.gray300,
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            width: "47%",
          }}
        >
          <Text weight="medium" type="paragraph3">
            Booking Type
          </Text>
          <Text type="paragraph4">{booking.bookingType}</Text>
        </View>
        <View
          style={{
            borderColor: baseStyle.gray300,
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            width: "48%",
          }}
        >
          <Text weight="medium" type="paragraph3">
            Appointment Type
          </Text>
          <Text type="paragraph4">{booking.appointmentType}</Text>
        </View>
        <View
          style={{
            borderColor: baseStyle.gray300,
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            width: "48%",
          }}
        >
          <Text weight="medium" type="paragraph3">
            Date
          </Text>
          <Text type="paragraph4">{booking.bookingDate}</Text>
        </View>
        <View
          style={{
            borderColor: baseStyle.gray300,
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            width: "48%",
          }}
        >
          <Text weight="medium" type="paragraph3">
            Time
          </Text>
          <Text type="paragraph4">-</Text>
        </View>
      </View>

      {booking.message && (
        <View style={baseStyle.section}>
          <Text weight="medium" type="paragraph3">
            Message
          </Text>
          <Text type="paragraph4">{booking.message}</Text>
        </View>
      )}

      {isRequest && (
        <>
          <Button
            text="Accept Booking"
            onPress={() => toggleBooking("accept")}
          />
          <Button
            text="Decline Booking"
            onPress={() => toggleBooking("decline")}
          />
        </>
      )}

      {statusPick !== "" && (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: deviceHeight,
            width: deviceWidth,
            zIndex: 999999,
            position: "absolute",
            top: -10,
            left: -20,
            right: 0,
          }}
        >
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            style={{ paddingHorizontal: 20 }}
          >
            <View>
              {statusPick === "decline" && <DeclineHandler />}
              {statusPick === "accept" && <AcceptHandler />}
            </View>
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default Booking;
