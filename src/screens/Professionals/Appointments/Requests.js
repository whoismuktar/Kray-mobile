import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { baseStyle } from "../../../assets/styles/base";
import UserCard from "../../../components/UserCard";
import Text from "../../../components/Text";
import EmojiMoodCards from "../../../components/EmojiMoodCards";
import AppointmentCard from "../../../components/AppointmentCard";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function AppointmentRequest(props) {
  const { appointmentRequests } = useSelector((state) => state.user);
  const navigation = useNavigation();

  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={appointmentRequests}
      contentContainerStyle={{
        paddingLeft: 0,
      }}
      style={baseStyle.page}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={<View style={{ marginBottom: 20 }}></View>}
      renderItem={({ item, index }) => <AppointmentCard booking={item} />}
    />
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

export default AppointmentRequest;
