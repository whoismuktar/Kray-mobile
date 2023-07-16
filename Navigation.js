import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  HomeIcon,
  MapIcon,
  TableCellsIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  UserCircleIcon,
  BellIcon,
  ChartBarIcon,
  Cog8ToothIcon,
} from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOut,
  MapIcon as MapIconOut,
  TableCellsIcon as TableCellsIconOut,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconOut,
} from "react-native-heroicons/outline";
import randomLogo from "./src/assets/images/randomLogo.png";
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
import ProfileScreen from "./src/screens/Profile";
import NotificationScreen from "./src/screens/Notification";
import AnalyticsScreen from "./src/screens/Analytics";
import SettingsScreen from "./src/screens/Settings";
import { baseStyle } from "./src/assets/styles/base";
import { Pressable, View, ImageBackground } from "react-native";
import UserCard from "./src/components/UserCard";
import Text from "./src/components/Text";
import { getFullName } from "./src/utils/helpers";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const { user } = useSelector((state) => state.user);
  const menu = [
    {
      title: "Profile",
      path: "Profile",
      icon: <UserCircleIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Notification",
      path: "Notification",
      icon: <BellIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Analytics",
      path: "Analytics",
      icon: <ChartBarIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Settings",
      path: "Settings",
      icon: <Cog8ToothIcon color={baseStyle.black} size={20} />,
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      /> */}
      <View style={{ padding: 20 }}>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <XMarkIcon color={baseStyle.black} size={32} />
        </Pressable>

        <Pressable
          onPress={() => props.navigation.navigate("Main")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <ImageBackground
            source={randomLogo}
            objectFit="contain"
            style={{ width: 35, height: 35, marginRight: 10 }}
          ></ImageBackground>

          <Text weight="bold" type="paragraph3">
            KRAY
          </Text>
        </Pressable>

        <View style={{ marginVertical: 40 }}>
          <UserCard
            vertical
            nameOnly
            name={getFullName(user)}
            aviWidth={50}
            aviHeight={50}
          />
        </View>

        <View>
          {menu.map((menu) => {
            return (
              <Pressable
                onPress={() => props.navigation.navigate(menu.path)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 15,
                }}
              >
                {menu.icon}
                <Text style={{ marginLeft: 10 }}>{menu.title}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

function BottomNav() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home" // change during auth
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
          headerShown: false,
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
          tabBarLabel: "Bookings",
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

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home" // change during auth
      // initialRouteName="Onboarding" // change during auth
      screenOptions={{
        drawerType: "front",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "",
          // headerLeft: () => <UserCard greetUser />,
          // headerRight: () => <BellIcon color={baseStyle.pryColor} />
        }}
        component={BottomNav}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen
        name="Main"
        component={BottomNav}
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
    </Drawer.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
