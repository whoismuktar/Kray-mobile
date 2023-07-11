import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./src/screens/Onboarding"
import AuthScreen from "./src/screens/Auth"
import HeaderLeft from "./src/components/HeaderLeft";
import SignUpScreen from "./src/screens/Auth/SignUp"
import LoginScreen from "./src/screens/Auth/Login"
import RegisterVerificationScreen from "./src/screens/Auth/RegisterVerification";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RegisterVerification" // change during auth
        screenOptions={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: "#000000",
          headerBackTitleVisible: false,
          title: "",
          headerTitleAlign: "center",
          headerLeft: () => <HeaderLeft />,
          headerTitleStyle: {
            // color: baseStyle.textBlack,
            fontWeight: "bold",
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            // headerShown: false,
          }}
          />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{}}
        />
        <Stack.Screen
          name="RegisterVerification"
          component={RegisterVerificationScreen}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
