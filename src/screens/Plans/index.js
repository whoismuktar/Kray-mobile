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
import PlanCard from "../../components/PlanCard";
import { useSelector } from "react-redux";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Plans(props) {
  const { userPlans } = useSelector((state) => state.user);
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
    },
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
            rightIcon={<Button text="Search" minimal />}
            hasLeftIcon
            hasRightIcon
            placeholder="Search health professionals"
            style={{ paddingVertical: 17 }}
          />
        </View>

        <View style={{}}>
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
              <Button
                text={item.title}
                type="outlinedBtn"
                style={{ borderColor: baseStyle.gray200 }}
                minimal
              />
            )}
          />
        </View>

        <View style={baseStyle.section["fullWidth"]}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={userPlans}
            vertical
            ItemSeparatorComponent={<View style={{ marginBottom: 20 }}></View>}
            contentContainerStyle={{
              // paddingTop: 20,
              width: "90%",
              alignSelf: "center",
              // height: "100%",
              flexGrow: 1,
              // backgroundColor: "red",
            }}
            renderItem={({ item, index }) => <PlanCard plan={item} />}
          />
        </View>
      </View>
    </HideKeyboard>
  );
}

export default Plans;
