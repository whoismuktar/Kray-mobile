import { Pressable, ScrollView, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Stepper from "../../components/Stepper";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";


const Plan = () => {
  const [plan, setPlan] = useState({})

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph4">
          {plan.title}
        </Text>

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

        <View>
          <Text type="paragraph4" style={{ textAlign: "right" }}>
            25%
          </Text>

          <Stepper color={baseStyle.black} />
        </View>
      </View>

      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph3">
          Description
        </Text>
        <Text>{plan.description}</Text>
      </View>

      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
          Activities
        </Text>

        {plan?.activity?.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                backgroundColor: baseStyle.gray200,
                flexDirection: "row",
                borderRadius: 20,
                padding: 20,
                marginBottom: 20,
              }}
            >
              <View style={{ width: "95%" }}>
                <Text type="paragraph3">Activity {i + 1}</Text>
                <Text type="paragraph4">{item.activity}</Text>
              </View>

              <CheckCircleIcon size={20} color={baseStyle.gray800} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Plan;
