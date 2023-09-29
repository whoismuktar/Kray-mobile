import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
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
  ArrowRightOnRectangleIcon,
  FolderIcon,
  ChartPieIcon,
  ArrowRightCircleIcon,
} from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOut,
  MapIcon as MapIconOut,
  TableCellsIcon as TableCellsIconOut,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconOut,
  FolderIcon as FolderIconOut,
  ChartPieIcon as ChartPieIconOut,
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
import NewPlanScreen from "./src/screens/Plans/New";
import PlanScreen from "./src/screens/Plans/Plan";
import BookingsScreen from "./src/screens/Bookings";
import NewBookingScreen from "./src/screens/Bookings/New";
import BookingScreen from "./src/screens/Bookings/Booking";
import ProfileScreen from "./src/screens/Profile";
import EditProfileScreen from "./src/screens/Profile/EditProfile";
import AccountScreen from "./src/screens/Profile/Account";
import NotificationScreen from "./src/screens/Notification";
import AnalyticsScreen from "./src/screens/Analytics";
import SettingsScreen from "./src/screens/Settings";
import NewGoalScreen from "./src/screens/Goals/New";
import GoalScreen from "./src/screens/Goals/Goal";

// Pro Screens
import AppointmentRequestScreen from "./src/screens/Professionals/Appointments/Requests";
import ProProfileScreen from "./src/screens/Professionals/ProProfile";
import TodaysAppointmentScreen from "./src/screens/Professionals/Appointments/TodaysAppointment";
import ProfBookingsScreen from "./src/screens/Professionals/Bookings";
import ViewBookingRequestScreen from "./src/screens/Professionals/Bookings/ViewBookingRequest";

import { baseStyle } from "./src/assets/styles/base";
import { Pressable, View, ImageBackground } from "react-native";
import UserCard from "./src/components/UserCard";
import Text from "./src/components/Text";
import { deviceHeight, getFullName } from "./src/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { destroyAccessToken } from "./redux/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const { isProfAccount, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const studentMenu = [
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
      title: "Explore",
      path: "Explore",
      icon: <ArrowRightCircleIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Plans",
      path: "Plans",
      icon: <ArrowRightCircleIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Bookings",
      path: "Bookings",
      icon: <ArrowRightCircleIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Settings",
      path: "Settings",
      icon: <Cog8ToothIcon color={baseStyle.black} size={20} />,
    },
  ];

  const profMenu = [
    {
      title: "Tasks",
      path: "Tasks",
      icon: <ArrowRightCircleIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Bookings",
      path: "ProfBookings",
      icon: <ArrowRightCircleIcon color={baseStyle.black} size={20} />,
    },
    {
      title: "Profile",
      path: "Profile",
      icon: <UserCircleIcon color={baseStyle.black} size={20} />,
    },
  ];

  const generalMenu = [
    {
      title: "Home",
      path: "Home",
    },
    {
      title: "Profile",
      path: "Profile",
    },
    {
      title: "Analytics",
      path: "Analytics",
    },
  ];

  const menu = isProfAccount ? profMenu : studentMenu;

  const logOut = async () => {
    dispatch(destroyAccessToken());
    props.navigation.navigate("Auth");

    console.log("log out");
    await AsyncStorage.removeItem("access_token");
    console.log(await AsyncStorage.getItem("access_token"));
  };

  return (
    <DrawerContentScrollView {...props} scrollEnabled={true}>
      {/* <DrawerItemList {...props} /> // default listing */}
      {/* <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      /> */}
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          minHeight: deviceHeight - 150,
          flex: 1,
        }}
      >
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
          {generalMenu.map((menu, i) => {
            return (
              <Pressable
                key={i}
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

          <View
            style={{
              height: 1,
              backgroundColor: baseStyle.black,
              width: "100%",
            }}
          ></View>

          {menu.map((menu, i) => {
            return (
              <Pressable
                key={i}
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

        <View
          style={[
            !isProfAccount && {
              // position: "absolute",
              // bottom: 20,
              // left: 20,
              width: "100%",
            },
          ]}
        >
          <Pressable
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => props.navigation.navigate("Login")}
          >
            <ArrowRightOnRectangleIcon size={20} color={baseStyle.black} />
            <Pressable onPress={() => logOut()}>
              <Text style={{ marginLeft: 10 }}>Log Out</Text>
            </Pressable>
          </Pressable>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerNav() {
  const { isProfAccount, access_token } = useSelector((state) => state.user);
  const isAuthenticated = async () =>
    await AsyncStorage.getItem("access_token");

  console.log({ isAuthenticated: isAuthenticated() });

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Login"
      screenOptions={{
        drawerType: "front",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="ProProfile"
        component={ProProfileScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Profile",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="AppointmentRequests"
        component={AppointmentRequestScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Appointment Request",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="TodaysAppointment"
        component={TodaysAppointmentScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Today's Appointment",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="ViewBookingRequest"
        component={ViewBookingRequestScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Appointment Request",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Profile",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Edit Profile",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Account",
          headerTitleAlign: "left",
        }}
      />

      {/* NEW */}

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          gestureEnabled: true,
          tabBarLabelStyle: {},
        }}
      />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Create New Plan",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterVerification"
        component={RegisterVerificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectActivity"
        component={SelectActivityScreen}
        options={{
          headerShown: false,
        }}
      />

      {!isProfAccount && (
        <>
          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{
              headerShown: true,
              headerLeft: () => <HeaderLeft />,
              headerTitle: "Session Booking",
              headerTitleAlign: "left",
            }}
          />
          <Stack.Screen
            name="NewBooking"
            component={NewBookingScreen}
            options={{
              headerShown: true,
              headerLeft: () => <HeaderLeft />,
              headerTitle: "Booking Details",
              headerTitleAlign: "left",
            }}
          />
          <Stack.Screen
            name="NewGoal"
            component={NewGoalScreen}
            options={{
              headerShown: !false,
              headerLeft: () => <HeaderLeft />,
              headerTitle: "Create New Goal",
              headerTitleAlign: "left",
            }}
          />
          <Stack.Screen
            name="Goal"
            component={GoalScreen}
            options={{
              headerShown: true,
              headerLeft: () => <HeaderLeft />,
              headerTitle: "Goal Details",
              headerTitleAlign: "left",
            }}
          />
          <Stack.Screen
            name="NewPlan"
            component={NewPlanScreen}
            options={{
              headerShown: !false,
              headerLeft: () => <HeaderLeft />,
              headerTitle: "Create New Plan",
              headerTitleAlign: "left",
            }}
          />
          <Stack.Screen
            name="Plan"
            component={PlanScreen}
            options={{
              headerShown: !false,
              headerLeft: () => <HeaderLeft />,
              headerTitle: "Plan Details",
              headerTitleAlign: "left",
            }}
          />

          <Stack.Screen
            name="Bookings"
            component={BookingsScreen}
            options={{
              headerShown: true,
              headerTitle: "Book Health Professionals",
            }}
          />

          <Stack.Screen
            name="Plans"
            component={PlansScreen}
            options={{
              headerShown: true,
              headerRight: () => (
                <Pressable style={{ marginRight: 20 }}>
                  {/* <CreateEvent color="black" /> */}
                </Pressable>
              ),
              headerTitle: "Plans",
              tabBarLabel: "Plans",
            }}
          />

          <Stack.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              headerShown: true,
              tabBarLabel: "Explore",
              tabBarLabel: ({ focused, color, size }) => {
                return <BottomLabel focused={focused} title="Explore" />;
              },
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <MapIcon color={baseStyle.pryColor} size={26} />
                ) : (
                  <MapIconOut color={baseStyle.pryColor} size={26} />
                ),
            }}
          />
        </>
      )}

      {isProfAccount && (
        <>
          <Stack.Screen
            name="Tasks"
            component={ExploreScreen}
            options={{
              headerShown: true,
              tabBarLabel: "Tasks",
            }}
          />
          <Stack.Screen
            name="ProfBookings"
            component={ProfBookingsScreen}
            options={{
              headerShown: true,
              headerRight: () => (
                <Pressable style={{ marginRight: 20 }}>
                  {/* <CreateEvent color="black" /> */}
                </Pressable>
              ),
              headerTitle: "Bookings",
              tabBarLabel: "Bookings",
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <ChatBubbleLeftRightIcon
                    color={baseStyle.pryColor}
                    size={26}
                  />
                ) : (
                  <ChatBubbleLeftRightIconOut
                    color={baseStyle.pryColor}
                    size={26}
                  />
                ),
            }}
          />
          <Stack.Screen
            name="Analytics"
            component={AnalyticsScreen}
            options={{
              headerShown: true,
              headerTitle: "Book Health Professionals",
              tabBarLabel: "Analytics",
            }}
          />
        </>
      )}
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
