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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { deviceHeight, deviceWidth } from "../../utils/helpers";
import BottomSheet from "@gorhom/bottom-sheet";
import Button from "../../components/Button";
import Chip from "../../components/Chip";
import Toast from "react-native-toast-message";
import { createMood } from "../../services/user";

function Home(props) {
  const { isProfAccount, userActivities } = useSelector((state) => state.user);
  const { quotes, moodReasons } = useSelector((state) => state.app);
  const navigation = useNavigation();

  const [chooseMoodActive, setChooseMoodActive] = useState(false);
  const [moodSelection, setMoodSelection] = useState({ name: "", icon: "" });
  const [moodReasonsSelection, setMoodReasonsSelection] = useState([]);
  const [bottomActive, setBottomActive] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["65%", "100%"], []);
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      resetMoodSelection()
    }
  }, []);

  const isMoodReasonSelected = (mood) =>
    moodReasonsSelection.find((m) => m === mood);

  const handleMoodSelections = (selection) => {
    if (isMoodReasonSelected(selection)) {
      const newSelections = moodReasonsSelection.filter((m) => m !== selection);

      setMoodReasonsSelection(newSelections);
      return;
    }

    setMoodReasonsSelection((selections) => [...selections, selection]);
  };

  const resetMoodSelection = () => {
    setBottomActive(false);
    setChooseMoodActive(false);
    setMoodReasonsSelection([]);
    setMoodSelection({});
    setSaveLoading(false);
  };

  const handleCreateMood = async () => {
    const data = {
      mood: moodSelection.name,
      reasons: moodReasonsSelection,
    };

    if (!data.mood || !data.reasons) return

    setSaveLoading(true);
    try {
      const res = await createMood(data);
      console.log({ res });
      const { message } = res?.data || "Mood Created";
      Toast.show({
        type: "error",
        text1: message,
      });

      resetMoodSelection();
    } catch (error) {
      console.log({ error: error.response.data });
      const message =
        error.response?.data.message || "There was an issue creating mood";

      Toast.show({
        type: "error",
        text1: message,
      });
      setSaveLoading(false);
    }
  };

  useEffect(() => {
    console.log({ moodReasonsSelection });
  }, [moodReasonsSelection]);

  const quoteOfTheDay = () => {
    const idx = Math.floor(Math.random() * quotes.length);

    console.log(idx);
    return quotes[idx];
  };

  const handleEmmitedMood = (mood) => {
    console.log("mooder");
    setChooseMoodActive(true);
    setBottomActive(true);
    setMoodSelection(mood);
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
              <EmojiMoodCards setMoodSelection={handleEmmitedMood} />
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

          {bottomActive && (
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                height: deviceHeight,
                width: deviceWidth,
                zIndex: 999999,
                position: "absolute",
                top: -10,
              }}
            >
              <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
                style={{ paddingHorizontal: 20 }}
              >
                {chooseMoodActive && (
                  <View>
                    <Text type="paragraph3" weight="medium">
                      What's making you {moodSelection.name}
                      {moodSelection.icon}
                    </Text>

                    <FlatList
                      keyExtractor={(item, index) => index}
                      numColumns={3}
                      data={moodReasons}
                      showsHorizontalScrollIndicator={false}
                      style={{ marginTop: 40 }}
                      renderItem={({ item, index }) => (
                        <Chip
                          text={item}
                          id={item.id}
                          hideIcon
                          style={{
                            borderWidth: isMoodReasonSelected(item) ? 2 : 1,
                            borderColor: isMoodReasonSelected(item)
                              ? baseStyle.purple200
                              : baseStyle.black,
                          }}
                          onPress={() => handleMoodSelections(item)}
                        />
                      )}
                    />

                    <View style={{ flex: 1 }}></View>

                    <Button
                      text="Save"
                      loader={saveLoading}
                      onPress={handleCreateMood}
                    />
                  </View>
                )}
              </BottomSheet>
            </View>
          )}
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
