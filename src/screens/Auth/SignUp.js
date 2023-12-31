import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import { baseStyle } from "../../assets/styles/base";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/solid";
import AltAuth from "../../components/AltAuth";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../services/auth";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignUp = () => {
  const navigation = useNavigation();
  const { isProfAuth } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onChangePassword = (text) => setPassword(text);
  const onChangeConfirmPassword = (text) => setConfirmPassword(text);

  const initRegister = () => {
    const credentials = {
      firstName,
      lastName,
      email,
      password,
    };
    if (isProfAuth) {
      credentials.userCategory = "healthprof";
    }

    register(credentials)
      .then((response) => {
        console.log({ response });

        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log({err});
        const message = err.response?.data?.message || "Error registering your account";

        Toast.show({
          type: "error",
          text1: message,
        });
      });
  };

  return (
    <HideKeyboard>
      <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
        <Text type="paragraph4" style={{ marginBottom: 10 }}>
          Enter your personal details
        </Text>

        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3">
            First Name
          </Text>
          <Input
            icon={<UserIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            placeholder="Enter first name"
            onChangeText={setFirstName}
            value={firstName}
          />
        </View>
        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3">
            Last Name
          </Text>
          <Input
            icon={<UserIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            placeholder="Enter put last name"
            onChangeText={setLastName}
            value={lastName}
          />
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
            placeholder="Enter password"
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
        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3">
            Confirm Password
          </Text>

          <Input
            icon={<LockClosedIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            onChangeText={onChangeConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            textContentType={"password"}
            placeholder="Confirm new password"
            value={confirmPassword}
          />

          <Pressable
            style={{
              textAlign: "right",
              position: "absolute",
              right: 20,
              bottom: 10,
              zIndex: 99999999,
            }}
            onPress={() => setShowConfirmPassword(!showPassword)}
          >
            <>
              {showConfirmPassword && (
                <EyeIcon name="eye-outline" size={22} color="#898A8D" />
              )}
              {!showConfirmPassword && (
                <EyeSlashIcon
                  name="eye-off-outline"
                  size={22}
                  color="#898A8D"
                />
              )}
            </>
          </Pressable>
        </View>
        <View
          style={[
            baseStyle.inputWrapper,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Checkbox
            style={{ marginRight: 10 }}
            value={isTermsAccepted}
            onValueChange={setIsTermsAccepted}
            color={isTermsAccepted ? baseStyle.pryColor : undefined}
          />
          <Text weight="medium">Terms & Conditions and Privacy Policy</Text>
        </View>
        <View style={baseStyle.section}>
          <Button
            disabled={true}
            text="Create Account"
            onPress={initRegister}
          />
        </View>
        {/* <View>
          <AltAuth mode="login" />
        </View> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            paddingBottom: 60,
          }}
        >
          <Text style={{}}>Already have an account? </Text>

          <Button
            type="textBtn"
            text="Login"
            onPress={() => navigation.navigate("Login")}
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
