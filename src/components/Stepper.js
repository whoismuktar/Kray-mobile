import { Text, View } from "react-native";
import { baseStyle } from "../assets/styles/base";
import { useSelector } from "react-redux";

function Stepper({ level, color }) {
  const { onboarding } = useSelector((state) => state.app);

  return (
    <View
      style={{
        width: "60%",
        backgroundColor: baseStyle.gray200,
        borderRadius: 50,
        height: 10,
      }}
    >
      <View
        style={{
          height: 10,
          backgroundColor: color || baseStyle.pryColor,
          width: `${(100 / onboarding.stages) * onboarding.currentStage}%`,
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}

export default Stepper;
