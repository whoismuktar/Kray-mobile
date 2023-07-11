import { useState, useRef, useEffect, createRef } from "react";
import { View } from "react-native";
import { EnvelopeIcon } from "react-native-heroicons/solid";
import { baseStyle, btnStyle } from "../../assets/styles/base";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

function ResetPassword({ navigation }) {
  const [email, setEmail] = useState("");

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
          Recover Password
        </Text>
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3">
          Email
        </Text>
        <Input
          icon={<EnvelopeIcon color={baseStyle.gray500} size={20} />}
          ftIcon
          hasLeftIcon
          placeholder="Enter email address"
          onChangeText={setEmail}
          value={email}
        />
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
