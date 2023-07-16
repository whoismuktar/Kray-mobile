import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { baseStyle } from "../../assets/styles/base";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Plans(props) {
  const filters = [
    {
      title: "All",
      id: "all",
    },
    {
      title: "Pending",
      id: "pending",
    },
    {
      title: "In Progress",
      id: "progress",
    },
    {
      title: "Completed",
      id: "completed",
    }
  ];

  return (
    <HideKeyboard>
      <View style={baseStyle.page}>
        <View style={{ flexDirection: "row" }}>
          <Button
            text="Create New Goal"
            type="outlinedBtn"
            minimal
            style={{ marginRight: 20 }}
          />
          <Button text="Create New Plan" type="outlinedBtn" minimal />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Input
            icon={
              <MagnifyingGlassIcon
                name="search"
                size={24}
                color={baseStyle.gray500}
              />
            }
            rightIcon={
              <Button
                text="Search"
                minimal
                style={{ backgroundColor: baseStyle.gray700 }}
              />
            }
            hasLeftIcon
            hasRightIcon
            placeholder="Search health professionals"
            style={{ paddingVertical: 17 }}
          />
        </View>

        <View style={baseStyle.section}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={filters}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<View style={{ marginLeft: 10 }}></View>}
            contentContainerStyle={{
              alignItems: "stretch",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
            renderItem={({ item, index }) => (
              <Button text={item.title} type="outlinedBtn" minimal />
            )}
          />
        </View>
      </View>
    </HideKeyboard>
  );
}

export default Plans;
