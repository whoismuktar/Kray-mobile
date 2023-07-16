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
import { BellIcon } from "react-native-heroicons/solid";
import EmojiMoodCards from "../../components/EmojiMoodCards";
import MoodCard from "../../components/MoodCard";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function Home(props) {
  const { userActivities } = useSelector((state) => state.user);
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

        <BellIcon color={baseStyle.pryColor} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={baseStyle.section}>
          <View style={styles.heroCard}>
            <Text>
              "Be kind to yourself. Remember, you are doing the best you can
              with what you know at this moment."
            </Text>
          </View>
        </View>

        <View>
          <Text type="header1">How are you feeling today?</Text>
          <EmojiMoodCards />
        </View>

        <View>
          <Text type="header1">Healthy Habits</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={userActivities}
            scrollEnabled={false}
            ItemSeparatorComponent={<View style={{ marginBottom: 20 }}></View>}
            renderItem={({ item, index }) => <MoodCard activity={item} />}
          />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
