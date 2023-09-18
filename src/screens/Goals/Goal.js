import { Pressable, ScrollView, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Stepper from "../../components/Stepper";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";


const Goal = () => {
  const [goal, setGoal] = useState({})

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph4">
          {goal.title}
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
            Daily: {`${goal.startDate} - ${goal.endDate}`}
          </Text>
        </View>

        <View>
          <Text type="paragraph4" style={{ textAlign: "right" }}>
            {goal.progress}
          </Text>

          <Stepper color={baseStyle.black} />
        </View>
      </View>

      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph3">
          Description
        </Text>
        <Text>{goal.description}</Text>
      </View>

      <View style={baseStyle.section}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
          Action Steps
        </Text>

        {goal?.activity?.map((item, i) => {
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
                <Text type="paragraph3">Goal {i + 1}</Text>
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

export default Goal;
