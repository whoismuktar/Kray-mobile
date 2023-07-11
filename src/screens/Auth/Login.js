import { useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { baseStyle } from "../../assets/styles/base";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/solid";
import AltAuth from "../../components/AltAuth";
import { useNavigation } from "@react-navigation/native";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onChangePassword = (text) => setPassword(text);

  return (
    <HideKeyboard>
      <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
        <View style={baseStyle.section}>
          <Text weight="medium" type="header1">
            Welcome Back
          </Text>
          <Text type="paragraph4">Enter your personal details</Text>
        </View>

        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3">
            Email
          </Text>
          <Input
            icon={<EnvelopeIcon color={baseStyle.gray500} size={20} />}
            ftIcon
            hasLeftIcon
            placeholder="Enter email adress"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={[baseStyle.inputWrapper, { position: "relative" }]}>
          <Text weight="medium" type="paragraph3">
            Password
          </Text>
          <Input
            icon={<LockClosedIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            placeholder="Input Text"
            onChangeText={onChangePassword}
            value={password}
          />
          <Pressable
            style={{
              textAlign: "right",
              position: "absolute",
              right: 20,
              bottom: 10,
              zIndex: 99999999,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <>
              {showPassword && (
                <EyeIcon name="eye-outline" size={22} color="#898A8D" />
              )}
              {!showPassword && (
                <EyeSlashIcon
                  name="eye-off-outline"
                  size={22}
                  color="#898A8D"
                />
              )}
            </>
          </Pressable>
        </View>

        <View style={baseStyle.section}>
          <Button disabled={true} text="Log In" />
        </View>
        <View>
          <AltAuth mode="login" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            paddingBottom: 60,
          }}
        >
          <Text style={{}}>Don't have an account? </Text>

          <Button
            type="textBtn"
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            btnTextStyle={{
              color: "#000",
              padding: 0,
              margin: 0,
            }}
            style={{
              width: "auto",
              padding: 0,
              margin: 0,
            }}
          />
        </View>
      </ScrollView>
    </HideKeyboard>
  );
};

export default SignUp;
