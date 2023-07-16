import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { baseStyle } from "../assets/styles/base";
import { getFullName } from "../utils/helpers";
import randomLogo from "../assets/images/randomLogo.png";
import Text from "./Text";

function UserCard(props) {
  const { user } = useSelector((state) => state.user);
  const aviWidth = props.aviWidth;
  const aviHeight = props.aviHeight;
  const isVertical = props.vertical;

  return (
    <View
      style={[
        styles.userCard,
        isVertical && { flexDirection: "column" },
      ]}
    >
      <Pressable onPress={props.iconOnPress && props.iconOnPress}>
        <ImageBackground
          source={randomLogo}
          objectFit="contain"
          style={[
            styles.profileImage,
            aviWidth && { width: aviWidth },
            aviHeight && { height: aviHeight },
            isVertical && { marginBottom: 10 },
          ]}
        ></ImageBackground>
      </Pressable>
      {props.greetUser && (
        <Text style={styles.userName}>
          Hi {props.name || getFullName(user)}
        </Text>
      )}
      {props.nameOnly && <Text>{props.name || getFullName(user)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 35,
    height: 35,
    backgroundColor: "#000",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: baseStyle.white,
    marginRight: 10,
  },
});

export default UserCard;
