import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { baseStyle, inputStyle } from "../assets/styles/base";

function Input(props) {
  const hasLeftIcon = props.hasLeftIcon;
  const hasRightIcon = props.hasRightIcon;
  const hasIcon = props.icon;

  const Icon = () => props.icon;

  return (
    <View
      style={[
        hasIcon && styles.hasIconWrapper,
        hasLeftIcon && styles.hasLeftIcon,
        hasRightIcon && styles.hasRightIcon,
      ]}
    >
      {hasIcon && (!hasRightIcon || hasLeftIcon) && <Icon />}

      <TextInput
        ref={(input) => props.inputRef && props.inputRef(input)}
        {...props}
        style={[
          styles.appInput,
          hasIcon && styles.inputHasIcon,
          hasRightIcon && styles.inputHasRightIcon,
          { ...props.style },
        ]}
      />

      {hasIcon && hasRightIcon && (
        <View style={{ marginRight: 0, alignSelf: "center" }}>
          <Icon />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appInput: {
    ...inputStyle,
    width: "100%",
    borderWidth: 1,
    borderColor: baseStyle.gray300,
  },
  inputHasIcon: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    flex: 1,
    alignSelf: "center",
  },
  inputHasRightIcon: {},
  hasIconWrapper: {
    backgroundColor: inputStyle.backgroundColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  hasLeftIcon: {
    paddingLeft: 15,
  },
  hasRightIcon: {},
});
export default Input;
