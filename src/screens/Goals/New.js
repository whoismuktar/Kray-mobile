import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import { DatePicker } from "react-native-woodpicker";
import { createGoal } from "../../services/resources";
import Toast from "react-native-toast-message";
import { setUserGoals } from "../../../redux/user";
import { useDispatch, useSelector } from "react-redux";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const NewGoal = ({navigation}) => {
  const dispatch = useDispatch();
  const { userGoals } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDateOpen, setStartDateOpen] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [endDateOpen, setEndDateOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleCreateGoal = async () => {
    try {
      const data = {
        title,
        description,
        notes,
        startDate: JSON.stringify(startDate)?.split("T")[0].replace(/\\/g, "").replace(/"/g, ""),
        endDate: JSON.stringify(endDate)?.split("T")[0].replace(/\\/g, "").replace(/"/g, ""),
      };

      const hasNullVal = Object.keys(data).some(
        (k) => data[k] === "" || data[k] === undefined
      );
      
      if (hasNullVal) throw {message: "Required field missing"};

      setLoading(true);

      console.log({data});
      
      const res = await createGoal(data);
      console.log({res: res.data});

      const all = [...userGoals, res.data];
      dispatch(setUserGoals(all));

      setLoading(false);


      navigation.navigate("Plans")
    } catch (error) {
      console.log({ error });

      Toast.show({
        type: "error",
        text1: error.message,
      });
      setLoading(false);
    }
  };

  const handleText = (date) => (
    <View>
      <Button
        text={date ? date.toDateString() : "Select Date"}
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
              text={handleText(startDate)}
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
              text={handleText(endDate)}
              isNullable={false}
              iosDisplay="inline"
              minimumDate={startDate}
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
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* <View style={{ flex: 1, backgroundColor: "red", alignContent: "stretch" }}> */}
        <Button text="Create" loader={loading} onPress={handleCreateGoal} />
        {/* </View> */}
      </View>
    </HideKeyboard>
  );
};

export default NewGoal;
