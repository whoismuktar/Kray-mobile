import { Text as ExpoText, StyleSheet } from "react-native";
import { textBase, textStyle } from "../assets/styles/base";

function Text(props) {
  const children = props.children;
  const weight = props.weight;
  const type = props.type;

  return (
    <ExpoText
      {...props}
      style={[
        styles.textStyle,
        weight && textStyle[weight],
        type && textStyle[type],
        { ...props.style },
      ]}
    >
      {children}
    </ExpoText>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    ...textBase,
  },
});
export default Text;
