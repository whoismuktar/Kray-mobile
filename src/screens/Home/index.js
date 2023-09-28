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
import MoodCard from "../../components/MoodCard";
import ProfHome from "./ProfHome";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function Home(props) {
  const { isProfAccount, userActivities } = useSelector((state) => state.user);
  const { quotes } = useSelector((state) => state.app);
  const navigation = useNavigation();

  const quoteOfTheDay = () => {
    const idx = Math.floor(Math.random() * quotes.length);

    console.log(idx);
    return quotes[idx];
  };

  return (
    <>
      {isProfAccount ? (
        <ProfHome />
      ) : (
        <View style={styles.page}>
          <UserCard greetUser iconOnPress={() => navigation.openDrawer()} />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={baseStyle.section}>
              <View style={styles.heroCard}>
                <Text>"{quoteOfTheDay()}"</Text>
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
                ItemSeparatorComponent={
                  <View style={{ marginBottom: 20 }}></View>
                }
                renderItem={({ item, index }) => <MoodCard activity={item} />}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </>
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
