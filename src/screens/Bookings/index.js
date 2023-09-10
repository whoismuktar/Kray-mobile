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
import ProCard from "../../components/ProCard";
import { useSelector } from "react-redux";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Bookings({navigation}) {
  const { professionals } = useSelector((state) => state.user);
  const filters = [
    {
      title: "All",
      id: "all",
    },
    {
      title: "Specialization",
      id: "specialization",
    },
    {
      title: "Available Today",
      id: "availableToday",
    },
  ];

  return (
    <HideKeyboard>
      <View style={baseStyle.page}>
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
            data={professionals}
            vertical
            ItemSeparatorComponent={<View style={{ marginBottom: 20 }}></View>}
            
            contentContainerStyle={{
              // paddingTop: 20,
              paddingBottom: 120,
              width: "90%",
              alignSelf: "center",
              // height: "100%",
              flexGrow: 1,
              // backgroundColor: "red",
            }}
            renderItem={({ item, index }) => <ProCard professional={item} />}
          />
        </View>
      </View>
    </HideKeyboard>
  );
}

export default Bookings;
