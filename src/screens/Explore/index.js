import { View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";

const Explore = () => {
  return (
    <View style={{ ...baseStyle.page, ...baseStyle.page.noHeader }}>
      <Text>Explore</Text>
    </View>
  );
};

export default Explore;
