import { ImageBackground, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";

const Profile = ({ navigation }) => {
  return (
    <View style={baseStyle.page}>
      <Text>Account Information</Text>

      <View>
        <View
          style={{
            backgroundColor: baseStyle.gray200,
            borderRadius: 20,
            padding: 14,
            marginTop: 20,
          }}
        >
          <Text>Alex Morgan</Text>
        </View>

        <View
          style={{
            backgroundColor: baseStyle.gray200,
            borderRadius: 20,
            padding: 14,
            marginTop: 20,
          }}
        >
          <Text>alex@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
