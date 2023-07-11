import React, { useState } from "react";
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
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/solid";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onChangePassword = (text) => setPassword(text);

  return (
    <HideKeyboard>
      <ScrollView style={baseStyle.page}>
        <View style={baseStyle.section}>
          <Text weight="medium" type="header1">
            Create Account
          </Text>
          <Text type="paragraph4">Enter your personal details</Text>
        </View>

        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3">
            First Name
          </Text>
          <Input
            icon={<UserIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            placeholder="Input Text"
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
            placeholder="Input Text"
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
            placeholder="Input Text"
            onChangeText={setPassword}
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
            onChangeText={onChangePassword}
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
      </ScrollView>
    </HideKeyboard>
  );
};

export default SignUp;
