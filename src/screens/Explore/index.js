import { ImageBackground, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import comingSoonImg from "../../assets/images/rafiki.png";
import { deviceHeight, deviceWidth } from "../../utils/helpers";

const Explore = () => {
  return (
    <View style={{ ...baseStyle.page, ...baseStyle.page.noHeader }}>
      <ImageBackground
        source={comingSoonImg}
        resizeMode="contain"
        style={{
          width: 350,
          height: deviceHeight/2,
          marginBottom: 20,
        }}
      ></ImageBackground>
      <Text weight="bold" style={{ textAlign: "center" }}>Coming Soon</Text>
    </View>
  );
};

export default Explore;
