import { View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";

const Bookings = () => {
  return (
    <View style={{ ...baseStyle.page, ...baseStyle.page.noHeader }}>
      <Text>Bookings</Text>
    </View>
  );
};

export default Bookings;
