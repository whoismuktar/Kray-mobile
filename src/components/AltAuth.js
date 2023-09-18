import { Pressable, View } from "react-native";
const AltAuth = ({ mode = "signUp" }) => {
  const isSignUp = mode === "signUp";

  return (
    <View style={{ alignItems: "center" }}>
      <Text weight="medium" style={{ marginBottom: 30 }}>
        or {isSignUp ? "sign up" : "log in"} with
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable>
          <GoogleLogo width={100} height={30} />
        </Pressable>
        <Pressable>
          <FacebookLogo width={100} height={30} />
        </Pressable>
        <Pressable>
          <AppleLogo width={100} height={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default AltAuth;
