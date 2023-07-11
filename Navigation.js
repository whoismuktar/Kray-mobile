import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./src/screens/Onboarding"
import AuthScreen from "./src/screens/Auth"
import HeaderLeft from "./src/components/HeaderLeft";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding" // change during auth
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
          options={{
            
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
