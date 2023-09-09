import {
  Keyboard,
  Pressable,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import { DatePicker, Picker } from "react-native-woodpicker";
import Checkbox from "expo-checkbox";
import SelectActivity from "../Onboarding/SelectActivity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const timelines = [
  {
    label: "Monthly",
    value: "MONTHLY",
  },
  {
    label: "Yearly",
    value: "YEARLY",
  },
];

const NewPlan = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDateOpen, setStartDateOpen] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [endDateOpen, setEndDateOpen] = useState(false);

  const [activities, setActivities] = useState(["hello"]);
  const [timeline, setTimeline] = useState();

  const removeActivity = (i) => {
    if (activities.length < 2) return;

    const arr = [...activities];
    arr.splice(i, 1);

    setActivities(arr);
  };
  const setActivityVal = (text, i) => {
    setActivities(() => {
      const result = [...activities];
      result[i] = text;
      return result;
    });
  };

  const handleText = () => (
    <View>
      <Button
        text={startDate ? startDate.toDateString() : "Select Date"}
        type="textBtn"
      />
    </View>
  );

  return (
    <HideKeyboard>
      <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
        <View style={[baseStyle.inputWrapper, { position: "relative" }]}>
          <Text weight="medium" type="paragraph4">
            Title
          </Text>
          <Input
            placeholder="Enter title"
            onChangeText={setTitle}
            value={title}
          />
        </View>

        <View style={[baseStyle.inputWrapper, { position: "relative" }]}>
          <Text weight="medium" type="paragraph4">
            Description
          </Text>
          <Input
            placeholder="Enter description"
            onChangeText={setDescription}
            value={description}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <Text
              weight="medium"
              type="paragraph4"
              style={{ marginBottom: 10 }}
            >
              End Date
            </Text>
            <DatePicker
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: baseStyle.gray300,
                borderRadius: 20,
                paddingVertical: 0,
                paddingHorizontal: 20,
              }}
              value={startDate}
              onDateChange={setStartDate}
              title="Date Picker"
              text={handleText()}
              isNullable={false}
              iosDisplay="inline"
              minimumDate={new Date(Date.now())}
            />
          </View>

          <View>
            <Text
              weight="medium"
              type="paragraph4"
              style={{ marginBottom: 10 }}
            >
              End Date
            </Text>

            <DatePicker
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: baseStyle.gray300,
                borderRadius: 20,
                paddingVertical: 0,
                paddingHorizontal: 20,
              }}
              value={endDate}
              onDateChange={setEndDate}
              title="Date Picker"
              text={handleText()}
              isNullable={false}
              iosDisplay="inline"
              minimumDate={new Date(Date.now())}
            />
          </View>
        </View>

        <View style={baseStyle.section}>
          <View style={{ marginBottom: 20, flexDirection: "row" }}>
            <Text weight="medium" type="paragraph3" style={{ marginRight: 5 }}>
              Strategies & Activities
            </Text>

            <Pressable onPress={() => setActivities((prev) => [...prev, ""])}>
              <PlusCircleIcon color={baseStyle.gray500} size={20} />
            </Pressable>
          </View>

          <View>
            {activities.map((desc, i) => {
              return (
                <View key={i}>
                  <Text
                    weight="medium"
                    type="paragraph3"
                    style={{ marginBottom: 0 }}
                  >
                    Activity {i + 1}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ width: "100%", flex: 1 }}>
                      <Input
                        style={{ width: "95%" }}
                        placeholder="Enter text"
                        onChangeText={(text) => setActivityVal(text, i)}
                        value={desc}
                      />
                    </View>
                    <Pressable onPress={() => removeActivity(i)}>
                      <MinusCircleIcon color={baseStyle.gray500} size={20} />
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={baseStyle.section}>
          <Text weight="medium" type="paragraph3" style={{ marginRight: 5 }}>
            Timeline
          </Text>

          <View
            style={{
              backgroundColor: baseStyle.pryColor,
              height: 40,
              paddingTop: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              width: "47%",
              color: baseStyle.white
            }}
            >
            <Picker
              item={timeline}
              items={timelines}
              onItemChange={setTimeline}
              title="Select Timeline"
              placeholder="Select Timeline"
              backdropAnimation={{ opacity: 0 }}
              isNullable
              textInputStyle={{
                color: baseStyle.white

              }}
            />
          </View>
        </View>

        <Button text="Create" />
      </ScrollView>
    </HideKeyboard>
  );
};

export default NewPlan;
