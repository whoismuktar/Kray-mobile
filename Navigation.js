import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  MapIcon,
  TableCellsIcon,
  ChatBubbleLeftRightIcon,
} from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOut,
  MapIcon as MapIconOut,
  TableCellsIcon as TableCellsIconOut,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconOut,
} from "react-native-heroicons/outline";
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
import ExploreScreen from "./src/screens/Explore";
import PlansScreen from "./src/screens/Plans";
import BookingsScreen from "./src/screens/Bookings";
import { baseStyle } from "./src/assets/styles/base";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MainNav() {
  return (
    <BottomTab.Navigator
      initialRouteName="Plans" // change during auth
      screenOptions={{
        // tabBarActiveTintColor: "blue",
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "capitalize",
          color: baseStyle.textBlack,
          fontWeight: "500",
        },
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 30,
        },
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderBottomWidth: 0, // Just in case.
        },
        headerTitleAlign: "left",
        headerTitleStyle: {
          color: baseStyle.textBlack,
          fontWeight: "500",
          fontSize: 20,
        },
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
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MapIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <MapIconOut color={baseStyle.pryColor} size={26} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Plans"
        component={PlansScreen}
        options={{
          headerShown: !false,
          headerLeft: () => <HeaderLeft />,
          headerRight: () => (
            <Pressable style={{ marginRight: 20 }}>
              {/* <CreateEvent color="black" /> */}
            </Pressable>
          ),
          headerTitle: "Plans",
          tabBarLabel: "Plans",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <TableCellsIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <TableCellsIconOut color={baseStyle.pryColor} size={26} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <ChatBubbleLeftRightIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <ChatBubbleLeftRightIconOut
                color={baseStyle.pryColor}
                size={26}
              />
            ),
        }}
      />
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
