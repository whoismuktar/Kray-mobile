import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon } from "react-native-heroicons/solid";
import { HomeIcon as HomeIconOut } from "react-native-heroicons/outline";
import OnboardingScreen from "./src/screens/Onboarding";
import AuthScreen from "./src/screens/Auth";
import HeaderLeft from "./src/components/HeaderLeft";
import SignUpScreen from "./src/screens/Auth/SignUp";
import LoginScreen from "./src/screens/Auth/Login";
import RegisterVerificationScreen from "./src/screens/Auth/RegisterVerification";
import ForgotPasswordScreen from "./src/screens/Auth/ForgotPassword";
import ChangePasswordScreen from "./src/screens/Auth/ChangePassword";
import SelectActivityScreen from "./src/screens/Onboarding/SelectActivity";
import HomeScreen from "./src/screens/Home";
import { baseStyle } from "./src/assets/styles/base";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MainNav() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: "blue",
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "capitalize",
          color: baseStyle.textBlack,
          fontWeight: "500"
        },
        // headerShadowVisible: false,
        // headerTintColor: "#000000",
        // title: "",
        // headerTitleAlign: "center",
        // headerLeft: () => <HeaderLeft />,
        // headerTitleStyle: {
        //   color: baseStyle.textBlack,
        //   fontWeight: "bold",
        //   fontSize: 22,
        // },
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // gestureEnabled: false,
          // tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <HomeIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <HomeIconOut color={baseStyle.pryColor} size={26} />
            ),
        }}
      />
      {/* <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "compass-3-fill" : "compass-3-line"}
              size="23"
              color={focused ? baseStyle.pryColor : baseStyle.grey1Color}
            ></Icon>
          ),
        }}
      /> */}
      {/* <BottomTab.Screen
        name="Event"
        component={EventsTabsScreen}
        options={{
          headerRight: () => (
            <Pressable style={{ marginRight: 20 }}>
              <CreateEvent color="black" />
            </Pressable>
          ),
          headerTitle: "Events",
          tabBarLabel: "Events",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "coupon-fill" : "coupon-line"}
              size="23"
              color={focused ? baseStyle.pryColor : baseStyle.grey1Color}
            ></Icon>
          ),
        }}
      /> */}
      {/* <BottomTab.Screen
        name="UserProfile"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "user-3-fill" : "user-3-line"}
              size="23"
              color={focused ? baseStyle.pryColor : baseStyle.grey1Color}
            ></Icon>
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main" // change during auth
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
          name="Main"
          component={MainNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen name="Auth" component={AuthScreen} options={{}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{}} />
        <Stack.Screen
          name="RegisterVerification"
          component={RegisterVerificationScreen}
          options={{}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{}}
        />
        <Stack.Screen
          name="SelectActivity"
          component={SelectActivityScreen}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
