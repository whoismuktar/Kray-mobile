import { StyleSheet, Pressable } from "react-native";
import { ChevronLeftIcon} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

function HeaderLeft(props) {
  const navigation = useNavigation();
  const propIcon = props.icon;

  return (
    <Pressable style={styles.goBackIcon} onPress={() => navigation.goBack()}>
      {propIcon || (
        <ChevronLeftIcon
            size={24}
          color={props.color || "#000000"}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goBackIcon: {
    textAlign: "center",
    alignSelf: "flex-start",
  },
});
export default HeaderLeft;
