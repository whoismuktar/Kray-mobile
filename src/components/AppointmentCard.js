import { View } from "react-native";
import { useSelector } from "react-redux";
import Text from "./Text";
import { baseStyle } from "../assets/styles/base";
import UserCard from "./UserCard";
import Button from "./Button";

function AppointmentCard({ booking }) {
  return (
    <View
      style={{
        borderColor: baseStyle.gray300,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <UserCard
        aviWidth={50}
        aviHeight={50}
      />
      <View
      >
        <Text weight="medium">First Last</Text>
        <Text weight="medium">25 Years</Text>
        <Text weight="medium">July 4</Text>
        <Text weight="medium">9:00 AM</Text>

        <Button
          text="View Details"
          type="outlinedBtn"
          minimal
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("NewGoal")}
        />
      </View>
    </View>
  );
}

export default AppointmentCard;
