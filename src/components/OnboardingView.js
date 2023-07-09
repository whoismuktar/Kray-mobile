import {
  ImageBackground,
  Pressable,
  StyleSheet,
  // Text,
  View,
} from "react-native";
import Stepper from "./Stepper";
import { baseStyle } from "../assets/styles/base";
import { deviceWidth } from "../utils/helpers";
// import MoonImg from "../assets/images/moon-earth.svg";
import MoonImg from "../assets/images/moon-earth.png";
import Text from "./Text";
import Button from "./Button";
import Svg from "./Svg";
import { setOnboardingCurrentStage } from "../../redux/app";

import SvgUri from "react-native-svg-uri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const OnboardingView = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { onboarding } = useSelector((state) => state.app);
  const { currentStage } = onboarding;
  const gotoNextStage = () => {
    if (onboarding.currentStage < 3) {
      dispatch(setOnboardingCurrentStage(currentStage + 1));
    }
  };

  return (
    <View style={baseStyle.page}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stepper />
        <Pressable
          style={{ marginRight: 20 }}
          onPress={navigation.navigate("Auth")}
        >
          <Text>SKIP</Text>
        </Pressable>
      </View>

      <ImageBackground
        source={MoonImg}
        resizeMode="contain"
        style={styles.image}
      ></ImageBackground>
      {/* <Svg svgMarkup={JSON.stringify(MoonImg)} /> */}
      {/* <SvgUri
        width="200"
        height="200"
        svgXmlData={MoonImg}
      /> */}

      {currentStage == 1 && (
        <View>
          <Text weight="bold" type="header1" style={{ textAlign: "center" }}>
            Track your mood, Stay in Tune with Your Emotions.
          </Text>
          <Text style={{ textAlign: "center" }}>
            With our mood tracking feature, you can monitor your mood over time
            and gain insights into your emotional patterns.
          </Text>
        </View>
      )}
      {currentStage == 2 && (
        <View>
          <Text weight="bold" type="header1" style={{ textAlign: "center" }}>
            Set goals for your well-being, Achieve positive change step by step.
          </Text>
          <Text style={{ textAlign: "center" }}>
            With goal setting, you can track your progress, celebrate
            milestones, and work towards a healthier and happier you.
          </Text>
        </View>
      )}
      {currentStage == 3 && (
        <View>
          <Text weight="bold" type="header1" style={{ textAlign: "center" }}>
            Book consultations with professionals, Expert support tailored to
            you.
          </Text>
          <Text style={{ textAlign: "center" }}>
            Book consultations, receive guidance, and work together towards your
            well-being goals.
          </Text>
        </View>
      )}

      <Button
        text={currentStage < 3 ? "Continue" : "Get Started"}
        onPress={gotoNextStage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    // height: "75%",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
    flex: 0.9,
    justifyContent: "center",
  },
});

export default OnboardingView;
