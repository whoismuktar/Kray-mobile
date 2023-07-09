import { Text as ExpoText, StyleSheet } from "react-native";
import { textBase, textStyle } from "../assets/styles/base";

function Text(props) {
  const children = props.children;
  const weight = props.weight;

  return (
    <ExpoText
      {...props}
      style={[
        styles.textStyle,
        weight && textStyle[weight],
        { ...props.styles },
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
