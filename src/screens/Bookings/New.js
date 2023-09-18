import { Pressable, ScrollView, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Stepper from "../../components/Stepper";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import Chip from "../../components/Chip";
import { FlatList } from "react-native";

const availableTime = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  // "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
];

const Plan = () => {
  const [booking, setBooking] = useState({});

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <View>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
          Appointment Type
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Chip
            hideIcon
            text="Consultation"
            id={booking.id}
            style={{ width: "auto", alignSelf: "unuset" }}
          />
          <Chip
            hideIcon
            text="Counselling"
            id={booking.id}
            style={{ width: "auto", alignSelf: "unuset" }}
          />
        </View>
      </View>

      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
          Booking Type
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Chip
            hideIcon
            text="Online"
            id={booking.id}
            style={{ width: "auto", alignSelf: "unuset" }}
          />
          <Chip
            hideIcon
            text="Physical"
            id={booking.id}
            style={{ width: "auto", alignSelf: "unuset" }}
          />
        </View>
      </View>

      <View style={{}}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
          Select Date
        </Text>

        <FlatList
          keyExtractor={(item, index) => index}
          data={[1, 2, 3, 4, 5]}
          contentContainerStyle={{
            alignItems: "stretch",
            gap: 10,
            marginBottom: 20,
            width: "100%",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <Chip
              hideIcon
              text={
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Text>Mon</Text>
                  <Text weight="bold" style={{ marginTop: 20 }}>
                    {10 + index}
                  </Text>
                </View>
              }
              id={booking.id}
              style={{ width: "auto", alignSelf: "unuset" }}
            />
          )}
        />
      </View>

      <View>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
          Select Time
        </Text>

        <View style={[baseStyle.section["fullRight"], { paddingLeft: 20 }]}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={availableTime}
            contentContainerStyle={{
              gap: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            renderItem={({ item, index }) => (
              <Chip
                hideIcon
                text={<Text>{item}</Text>}
                id={booking.id}
                style={{ width: "auto", alignSelf: "unuset" }}
              />
            )}
          />
        </View>
      </View>

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
        />
      </View>

      <Button text="Book A Session" onPress={createbooking} />

    </ScrollView>
  );
};

export default Plan;
