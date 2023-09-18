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
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const { isProfAccount, user } = useSelector((state) => state.user);

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

  const profMenu = [
    {
      title: "Profile",
      path: "Profile",
      icon: <UserCircleIcon color={baseStyle.black} size={20} />,
    },
  ];

  const menu = isProfAccount ? profMenu : studentMenu;

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
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
              position: "absolute",
              bottom: 20,
              left: 20,
              width: "100%",
            },
          ]}
        >
          <Pressable
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => props.navigation.navigate("Login")}
          >
            <ArrowRightOnRectangleIcon size={20} color={baseStyle.black} />
            <Text style={{ marginLeft: 10 }}>Log Out</Text>
          </Pressable>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

function BottomNav() {
  const { isProfAccount } = useSelector((state) => state.user);

  const BottomLabel = ({ focused, title }) => {
    return focused ? (
      <Text
        weight={focused && "bold"}
        type="paragraph4"
        style={{ marginBottom: -5, color: baseStyle.pryColor }}
      >
        {title}
      </Text>
    ) : (
      <Text
        weight={focused && "bold"}
        type="paragraph4"
        style={{ marginBottom: -5, color: baseStyle.pryColor }}
      >
        {title}
      </Text>
    );
  };

  const StudentBottomTab = () => (
    <BottomTab.Navigator
      initialRouteName="Home" // change during auth
      screenOptions={{
        // tabBarActiveTintColor: "blue",
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "capitalize",
          color: baseStyle.pryColor,
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
          gestureEnabled: true,
          tabBarLabelStyle: {},
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Home" />;
          },
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
      <BottomTab.Screen
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
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Plans" />;
          },
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
          headerShown: true,
          headerTitle: "Book Health Professionals",
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Bookings" />;
          },
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
  const ProfBottomTab = () => (
    <BottomTab.Navigator
      initialRouteName="EditProfile" // change during auth
      screenOptions={{
        // tabBarActiveTintColor: "blue",
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "capitalize",
          color: baseStyle.pryColor,
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
          gestureEnabled: true,
          tabBarLabelStyle: {},
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Home" />;
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <HomeIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <HomeIconOut color={baseStyle.pryColor} size={26} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Tasks"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Tasks",
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Tasks" />;
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <FolderIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <FolderIconOut color={baseStyle.pryColor} size={26} />
            ),
        }}
      />
      <BottomTab.Screen
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
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Bookings" />;
          },
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
      <BottomTab.Screen
        name="Analytics"
        component={BookingsScreen}
        options={{
          headerShown: true,
          headerTitle: "Book Health Professionals",
          tabBarLabel: ({ focused, color, size }) => {
            return <BottomLabel focused={focused} title="Analytics" />;
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <ChartPieIcon color={baseStyle.pryColor} size={26} />
            ) : (
              <ChartPieIconOut color={baseStyle.pryColor} size={26} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
  return <>{isProfAccount ? <ProfBottomTab /> : <StudentBottomTab />}</>;
}

function DrawerNav() {
  const { isProfAccount } = useSelector((state) => state.user);

  const StudentDrawerNav = () => (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Main" // change during auth
      screenOptions={{
        drawerType: "front",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Main" options={{}} component={BottomNav} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{}}
      />
      <Stack.Screen name="Auth" component={AuthScreen} options={{}} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Create New Plan",
          headerTitleAlign: "left",
        }}
      />
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
    </Drawer.Navigator>
  );
  const ProfDrawerNav = () => (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="EditProfile" // change during auth
      screenOptions={{
        drawerType: "front",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Main" options={{}} component={BottomNav} />

      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{}}
      />
      <Stack.Screen name="Auth" component={AuthScreen} options={{}} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerLeft: () => <HeaderLeft />,
          headerTitle: "Create New Account",
          headerTitleAlign: "left",
        }}
      />
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
    </Drawer.Navigator>
  );

  return <>{isProfAccount ? <ProfDrawerNav /> : <StudentDrawerNav />}</>;
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
