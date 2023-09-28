import { FlatList, Pressable, View } from "react-native";
import Text from "./Text";
import { useSelector } from "react-redux";
import { baseStyle } from "../assets/styles/base";
import { deviceWidth, deviceHeight } from "../utils/helpers";

function EmojiMoodCards(props) {
  const { moods } = useSelector((state) => state.app);

  const emitSelection = (selection) => {
    props.setMoodSelection(selection)
  }

  const MoodCard = ({ mood }) => {
    return (
      <>
        <Pressable
          style={{
            backgroundColor: baseStyle.gray200,
            borderRadius: 8,
            width: (deviceWidth / moods.length) * 0.8,
            paddingVertical: 15,
            alignItems: "center",
          }}
          onPress={() => {
            emitSelection(mood)
          }}
        >
          <Text>{mood.icon}</Text>
          <Text type="paragraph5">{mood.name}</Text>
        </Pressable>
      </>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index}
        data={moods}
        contentContainerStyle={{
          alignItems: "stretch",
          justifyContent: "space-between",
          marginBottom: 20,
          width: "100%",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ item, index }) => <MoodCard mood={item} />}
      />
    </View>
  );
}

export default EmojiMoodCards;
