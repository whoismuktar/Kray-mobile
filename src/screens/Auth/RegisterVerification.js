import { useState, useRef, useEffect, createRef } from "react";
import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { baseStyle, btnStyle, textStyle } from "../../assets/styles/base";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { deviceWidth } from "../../utils/helpers";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function RegisterVerification({ navigation }) {
  const defaultCount = 40;

  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [startTimer, setStartTimer] = useState(null);
  const [timer, setTimer] = useState(null);
  const [resetCount, setResetCount] = useState(defaultCount);
  const [canResend, setCanResend] = useState(false);

  // TODO Automate these refs
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

  const [allRefs, setAllRefs] = useState([]);

  const ResendVerification = () => {
    // resend request here
    // axios.get

    setResetCount(defaultCount);
    setStartTimer(true);
    setCanResend(false);
  };
  const Resend = () => (
    <Text
      onPress={canResend && ResendVerification}
      style={{
        ...styles.verifyBtn,
        color: !canResend && baseStyle.gray300
      }}
    >
      Resend code {canResend ? "now" : `in ${resetCount}`}
    </Text>
  );

  const onChangeInput = (evt, index) => {
    const value = evt.nativeEvent.text;
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;

    setInputs(updatedInputs);

    if (index + 1 < inputs.length) {
      allRefs[index + 1].current.focus();
    }
  };

  // start timer
  let stopTimer = () => {
    if (resetCount === 0) {
      clearInterval(timer);
      setStartTimer(false);

      setCanResend(true);
    }
  };

  useEffect(() => {
    input1.current.focus();
    setAllRefs([input1, input2, input3, input4, input5, input6]);

    // change scope if dependent on api
    setStartTimer(true);
  }, []);

  // Start Timer
  useEffect(() => {
    if (startTimer) {
      setTimer(() =>
        setInterval(() => {
          setResetCount((count) => count - 1);
        }, 1000)
      );
    }
  }, [startTimer]);

  useEffect(() => {
    stopTimer();
  }, [resetCount]);

  return (
    <HideKeyboard>
      <View style={styles.page}>
        <View style={{ marginBottom: 20 }}>
          <Text weight="medium" type="header1">
            OTP Verification
          </Text>
          <Text>
            We just sent a verification code to email address. Kindly enter the
            code received below
          </Text>
        </View>

        <View style={styles.container}>
          <Input
            style={styles.input}
            value={inputs[0]}
            placeholder="1"
            onChange={(evt) => onChangeInput(evt, 0)}
            keyboardType="number-pad"
            maxLength={1}
            inputRef={(input) => {
              input1.current = input;
            }}
          />
          <Input
            style={styles.input}
            value={inputs[1]}
            placeholder="2"
            onChange={(evt) => onChangeInput(evt, 1)}
            keyboardType="number-pad"
            maxLength={1}
            inputRef={(input) => {
              input2.current = input;
            }}
          />
          <Input
            style={styles.input}
            value={inputs[2]}
            placeholder="3"
            onChange={(evt) => onChangeInput(evt, 2)}
            keyboardType="number-pad"
            maxLength={1}
            inputRef={(input) => {
              input3.current = input;
            }}
          />
          <Input
            style={styles.input}
            value={inputs[3]}
            placeholder="4"
            onChange={(evt) => onChangeInput(evt, 3)}
            keyboardType="number-pad"
            maxLength={1}
            inputRef={(input) => {
              input4.current = input;
            }}
          />
          <Input
            style={styles.input}
            value={inputs[4]}
            placeholder="5"
            onChange={(evt) => onChangeInput(evt, 4)}
            keyboardType="number-pad"
            maxLength={1}
            inputRef={(input) => {
              input5.current = input;
            }}
          />
          <Input
            style={styles.input}
            value={inputs[5]}
            placeholder="6"
            onChange={(evt) => onChangeInput(evt, 5)}
            keyboardType="number-pad"
            maxLength={1}
            inputRef={(input) => {
              input6.current = input;
            }}
          />
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Resend />
        </View>

        <View style={{ flex: 0.8 }}></View>

        <Button
          text="Continue"
          onPress={() => navigation.navigate("MoodSelect")}
        />
      </View>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  page: {
    ...baseStyle.page,
  },
  introText: {
    color: baseStyle.grey1Color,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 23,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verifyBtn: {
    textAlign: "right",
  },
  flatContainer: {
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    width: (deviceWidth/6)- 20,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    // flex: 1,
    // width: "100%",
  },
});

export default RegisterVerification;
