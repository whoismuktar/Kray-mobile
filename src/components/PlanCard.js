import React from "react";
import { View } from "react-native";
import { TagIcon } from "react-native-heroicons/outline";
import { CalendarIcon } from "react-native-heroicons/solid";
import Text from "./Text";
import Button from "./Button";
import { baseStyle } from "../assets/styles/base";
import { useNavigation } from "@react-navigation/core";

const PlanCard = ({ plan, id }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        // marginBottom: 30,
        padding: 20,
        borderWidth: 1,
        borderColor: baseStyle.purple200,
        borderRadius: 10,
        backgroundColor: baseStyle.white,
        ...baseStyle.boxShadow,
      }}
      onPress={navigation.navigate("Plan", {
        id,
      })}
    >
      <View style={{ flex: 1 }}>
        <Text type="paragraph3" style={{ marginBottom: 10 }}>
          {plan.title}
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <TagIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
          <Text type="paragraph4">{plan.tag}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <CalendarIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
          <Text type="paragraph4">
            {`${plan.timeline}: ${plan.startDate} - ${plan.endDate}`}
          </Text>
        </View>
      </View>

      <View>
        <Button text="Health Plan" type="pryBtn" minimal />
      </View>
    </View>
  );
};

export default PlanCard;
