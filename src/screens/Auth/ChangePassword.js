import { useState, useRef, useEffect, createRef } from "react";
import { Pressable, View } from "react-native";
import {
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/solid";
import { baseStyle, btnStyle } from "../../assets/styles/base";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

function ResetPassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onChangePassword = (text) => setPassword(text);
  const onChangeConfirmPassword = (text) => setConfirmPassword(text);
  const ResendVerification = () => {
    // resend request here
    // axios.get

    setResetCount(defaultCount);
    setStartTimer(true);
    setCanResend(false);
  };

  return (
    <View style={baseStyle.page}>
      <View style={baseStyle.section}>
        <Text weight="medium" type="header1">
          Change Password
        </Text>
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
              <EyeSlashIcon name="eye-off-outline" size={22} color="#898A8D" />
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
              <EyeSlashIcon name="eye-off-outline" size={22} color="#898A8D" />
            )}
          </>
        </Pressable>
      </View>

      <Button
        text="Reset Password"
        style={btnStyle.wrapper}
        onPress={() => navigation.navigate("ChangePassword")}
      />
    </View>
  );
}

export default ResetPassword;
