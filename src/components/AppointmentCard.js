import { View } from "react-native";
import Text from "./Text";
import { baseStyle } from "../assets/styles/base";
import UserCard from "./UserCard";
import Button from "./Button";
import { getFullName } from "../utils/helpers";

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
      <UserCard aviWidth={50} aviHeight={50} />
      <View>
        <Text weight="medium">{getFullName(booking.student)}</Text>
        <Text weight="medium">{booking.student.dob}</Text>
        <Text weight="medium">{getDate(booking.createdOn)}</Text>
        <Text weight="medium">{getTime(booking.createdOn)}</Text>

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
