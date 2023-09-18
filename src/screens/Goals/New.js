import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import { DatePicker } from "react-native-woodpicker";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const NewGoal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDateOpen, setStartDateOpen] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [endDateOpen, setEndDateOpen] = useState(false);

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
      <View style={baseStyle.page}>
        <View style={[baseStyle.inputWrapper, { position: "relative" }]}>
          <Text weight="medium" type="paragraph4">
            Goal Title
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

        <View style={{ paddingVertical: 20 }}>
          <Input
            style={{
              height: 200,
              padding: 20,
              borderColor: baseStyle.gray300,
              borderWidth: 1,
            }}
            underlineColorAndroid="transparent"
            placeholder="Write text here..."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>

        <Button text="Create" onPress={createGoal} />
      </View>
    </HideKeyboard>
  );
};

export default NewGoal;
