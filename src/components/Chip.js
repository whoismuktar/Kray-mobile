import { StyleSheet, Text, Pressable, View } from "react-native";
import { baseStyle } from "../assets/styles/base";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

function Chip(props) {
  const rightIcon = props.rightIcon;
  const disablePress = props.disablePress;
  const handleOnPress = props.onPress;
  const chipTextStyle = props.chipTextStyle;

  const navigation = useNavigation();

  const handleChipPress = () => {
    if (disablePress) return;

    if (props.multiple) {
      props.refreshList && props.setRefreshList(!props.refreshList);
      props.selectMultipleActivities(props.id);
    } else {
      // default
      const selectActivity = navigation.navigate("Activity", {
        category: props.id,
      });
    }
  };

  const isSelected =
    props.multiple && props.selection.find((cat) => cat.id === props.id);

  return (
    <Pressable
      style={[
        styles.chip,
        isSelected && styles.chipSelected,
        { ...props.style },
      ]}
      onPress={(handleOnPress && handleOnPress) || handleChipPress}
    >
      {!props.hideIcon && (
        <View style={[styles.chipIcon]}>
          {props.icon || (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color={isSelected ? "#ffffff" : baseStyle.pryColor}
            />
          )}
        </View>
      )}
      <Text
        style={[
          styles.chipText,
          isSelected && { color: "#ffffff" },
          { ...chipTextStyle },
        ]}
      >
        {props.text}
      </Text>
      {rightIcon && (
        <View style={[styles.chipIcon]}>{props.icon || rightIcon}</View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    color: baseStyle.grey1Color,
    flexDirection: "row",
    alignItems: "center",
    borderColor: baseStyle.grey2Color,
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  chipSelected: {
    backgroundColor: baseStyle.pryColor,
    color: "#ffffff",
    borderWidth: 0,
  },
  chipIcon: {
    color: baseStyle.grey1Color,
    marginRight: 7,
  },
  chipText: {
    color: baseStyle.grey1Color,
    fontSize: 14,
  },
});

export default Chip;
