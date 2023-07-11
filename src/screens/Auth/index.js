import React from "react";
import { ImageBackground, View } from "react-native";
import { baseStyle, textStyle } from "../../assets/styles/base";
import Logo from "../../assets/images/randomLogo.png";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Pressable as Presser } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Auth(props) {
  const navigation = useNavigation();

  return (
    <View style={baseStyle.page}>
      <ImageBackground
        source={Logo}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 150,
        }}
      ></ImageBackground>

      <Text
        weight="medium"
        type="header1"
        style={{ textAlign: "center", marginTop: 40 }}
      >
        Welcome KRAY
      </Text>

      <Text style={{ textAlign: "center" }}>
        Your companion for mental wellbeing and personal growth
      </Text>

      <View>
        <Button text="Sign Up as a Student" />
        <Button text="Sign Up as Health Professional" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          // height: 5,
        }}
      >
        <Text style={{ }}>
          Already have an account?{" "}
        </Text>

        {/* <Presser
        >
          <Text>SKIP</Text>
        </Presser> */}

        <Button
          type="textBtn"
          text="Login"
          onPress={()=> navigation.navigate("Login")}
          btnTextStyle={{ 
            color: "#000",
          padding: 0,
          margin: 0,
          // height: 1,
         }}
          style={{
            width: "auto",
            padding: 0,
            margin: 0,
          }}
        />
      </View>
    </View>
  );
}

export default Auth;
