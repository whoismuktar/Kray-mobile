import { ImageBackground, Pressable, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import { getFullName } from "../../utils/helpers";
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  PencilIcon,
  UserIcon,
} from "react-native-heroicons/solid";

const Profile = ({ navigation }) => {
  return (
    <View style={baseStyle.page}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <ImageBackground
          source={{
            uri: booking.prof.profileImage,
          }}
          imageStyle={{ borderRadius: 400 }}
          resizeMode="cover"
          style={{ width: 120, height: 120, marginBottom: 20 }}
        ></ImageBackground>

        <Text style={{ textAlign: "center" }}>Alex Morgan</Text>
        <Text style={{ textAlign: "center" }}>alex@gmail.com</Text>
      </View>

      <View>
        <Pressable
          style={{
            backgroundColor: baseStyle.gray200,
            borderRadius: 20,
            padding: 14,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={{ flexDirection: "row" }}>
            <UserIcon
              size={20}
              color={baseStyle.black}
              style={{ marginRight: 10 }}
            />
            <Text style={{ flex: 1 }}>Account</Text>
            <ChevronRightIcon
              size={20}
              color={baseStyle.black}
              style={{ marginRight: 10 }}
            />
          </View>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: baseStyle.gray200,
            borderRadius: 20,
            padding: 14,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <View style={{ flexDirection: "row" }}>
            <PencilIcon
              size={20}
              color={baseStyle.black}
              style={{ marginRight: 10 }}
            />
            <Text style={{ flex: 1 }}>Profile</Text>
            <ChevronRightIcon
              size={20}
              color={baseStyle.black}
              style={{ marginRight: 10 }}
            />
          </View>
        </Pressable>

        {/* <Pressable
          style={{
            backgroundColor: baseStyle.gray200,
            borderRadius: 20,
            padding: 14,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("AccountAppointment")}
        >
          <View style={{ flexDirection: "row" }}>
            <CalendarDaysIcon
              size={20}
              color={baseStyle.black}
              style={{ marginRight: 10 }}
            />
            <Text style={{ flex: 1 }}>Appointments</Text>
            <ChevronRightIcon
              size={20}
              color={baseStyle.black}
              style={{ marginRight: 10 }}
            />
          </View>
        </Pressable> */}
      </View>
    </View>
  );
};

export default Profile;
