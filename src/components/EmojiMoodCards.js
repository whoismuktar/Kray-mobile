import { FlatList, View } from "react-native";
import Text from "./Text";
import { useSelector } from "react-redux";
import { baseStyle } from "../assets/styles/base";
import { deviceWidth } from "../utils/helpers";

function EmojiMoodCards(props) {
  const { moods } = useSelector((state) => state.app);

  const MoodCard = ({ mood }) => {
    return (
      <View
        style={{
          backgroundColor: baseStyle.gray200,
          borderRadius: 8,
          width: deviceWidth/moods.length * 0.8,
          paddingVertical: 15,
          alignItems: "center"
        }}
      >
        <Text>{mood.icon}</Text>
        <Text type="paragraph5">{mood.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index}
        data={moods}
        // style={{ backgroundColor: "red" }}
        contentContainerStyle={{
          alignItems: "stretch",
          justifyContent: "space-between",
          marginBottom: 20,
          width: "100%",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        // ItemSeparatorComponent={<View style={{ marginLeft: -20 }}></View>}
        renderItem={({ item, index }) => <MoodCard mood={item} />}
      />
    </View>
  );
}

export default EmojiMoodCards;
