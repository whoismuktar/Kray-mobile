import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { baseStyle } from "../../assets/styles/base";
import UserCard from "../../components/UserCard";
import Text from "../../components/Text";
import EmojiMoodCards from "../../components/EmojiMoodCards";
import AppointmentCard from "../../components/AppointmentCard";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function ProfHome(props) {
  const { appointmentRequests } = useSelector((state) => state.user);
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <UserCard greetUser iconOnPress={() => navigation.openDrawer()} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text weight="medium">Appointment Requests</Text>
          <Pressable onPress={() => navigation.navigate("AppointmentRequests")}>
            <Text weight="medium">View all</Text>
          </Pressable>
        </View>

        <FlatList
          keyExtractor={(item, index) => index}
          data={appointmentRequests}
          contentContainerStyle={{
            padding: 20,
            paddingLeft: 0,
          }}
          style={{
            height: 200,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{ marginLeft: 20 }}></View>}
          renderItem={({ item, index }) => <AppointmentCard booking={item} />}
        />

        <View
          style={{
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text weight="medium">Upcoming Appointment</Text>
            <Pressable
              onPress={() => navigation.navigate("TodaysAppointment")}
            >
              <Text weight="medium">View all</Text>
            </Pressable>
          </View>

          <View>
            {appointmentRequests.map((item, i) => (
              <View
                key={i}
                style={{
                  marginBottom: 10,
                }}
              >
                <AppointmentCard booking={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    ...baseStyle.page,
    paddingTop: 80,
  },
  heroCard: {
    ...baseStyle.allChildrenCenter,
    backgroundColor: "#eaeaea",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
  },
});

export default ProfHome;
