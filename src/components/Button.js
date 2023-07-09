import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { btnStyle } from "../assets/styles/base";

function Button(props) {
  const hasLeftIcon = props.hasLeftIcon;
  const btnType = props.type;
  const pryBtn = props.type === "pryBtn";

  return (
    <View>
      <Pressable
        style={[
          styles.btn,
          btnStyle[btnType] || btnStyle.pryBtn,
          props.loader && btnStyle.btnDisabled,
          props.style, // must be last item
        ]}
        onPress={props.onPress}
        disabled={props.loader}
      >
        {props.showLoader && (
          <ActivityIndicator
            animating={props.loader}
            size="small"
            color="#0000ff"
            style={{ flex: 1, position: "absolute", zIndex: 999 }}
          />
        )}

        {hasLeftIcon && (
          <View style={btnStyle.hasIcon.iconLeft}>{props.icon}</View>
        )}

        <Text style={[btnStyle.hasIcon.btnText, styles.btnText, props.btnTextStyle]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    ...btnStyle.hasIcon,
    // ...btnStyle.hasIcon.isPry,
    marginBottom: 23,
  },
  btnText: {
    color: "#ffffff"
  }
});

export default Button;
