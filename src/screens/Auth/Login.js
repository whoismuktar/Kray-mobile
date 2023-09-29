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
import HeaderLeft from "../../components/HeaderLeft";
import { login } from "../../services/auth";
import { useDispatch } from "react-redux";
import { setAccessToken, setUserId } from "../../../redux/user";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("studentTestAccount@gmail.com");
  const [password, setPassword] = useState("qwerty");
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const onChangePassword = (text) => setPassword(text);
  const handleLogin = () => {
    setAuthLoading(true);

    login({ email, password })
      .then((res) => {
        const token = res.data.token;
        const userId = res.data.id;

        AsyncStorage.setItem("access_token", token)
        AsyncStorage.setItem("userId", JSON.stringify(userId))
        .then(() => {
          setAuthLoading(false);
          navigation.navigate("Home");
          dispatch(setAccessToken(token));
          dispatch(setUserId(userId));
        })
        .catch((e) => {
          console.log("Error storing token in AsyncStorage:", e);
          setAuthLoading(false);
        });
      })
      .catch((e) => {
        console.log({ e });
        console.log("msg: ", e.message);
        const message = "There was an issue signing you in";

        Toast.show({
          type: "error",
          text1: message,
        });
        setAuthLoading(false);
      });
  };

  return (
    <HideKeyboard>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ ...baseStyle.page, ...baseStyle.page.noHeader }}
      >
        <View style={{ marginBottom: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: -15,
            }}
          >
            <HeaderLeft />
            <Text weight="medium" type="header1">
              Welcome Back
            </Text>
          </View>
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
            placeholder="Enter password"
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={!showPassword}
            textContentType={"password"}
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

        <Text
          type="paragraph4"
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password?
        </Text>

        <View style={baseStyle.section}>
          <Button
            // disabled={true}
            loader={authLoading}
            text="Log In"
            onPress={() => handleLogin()}
          />
        </View>
        {/* <View>
          <AltAuth mode="signUp" />
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

export default Login;
