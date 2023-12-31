import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { baseStyle, textStyle } from "../../assets/styles/base";

import { useDispatch, useSelector } from "react-redux";
import { setUserActivities } from "../../../redux/app";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import Text from "../../components/Text";

function SelectActivity({ navigation }) {
  const dispatch = useDispatch();
  const { activities, userActivities } = useSelector((state) => state.app);
  const [selection, setSelection] = useState(userActivities);
  const [refreshList, setRefreshList] = useState(false);

  const selectMultipleActivities = (id) => {
    const alreadySelectedIdx = selection.findIndex((cat) => cat.id === id);

    if (alreadySelectedIdx !== -1) {
      let newSelection = selection;
      newSelection.splice(alreadySelectedIdx, 1);

      setSelection(newSelection);
      return;
    }
    const selected = activities.find((cat) => cat.id === id);
    setSelection((selection) => [...selection, selected]);

    // dispatch(setUserActivities([...userActivities, selected]))
    // console.log(userActivities);
  };

  return (
    <View style={styles.page}>
      <View style={baseStyle.section}>
        <Text weight="medium" type="header1">
          Welcome
        </Text>
        <Text type="paragraph4">Select topics of interest</Text>
      </View>

      <View style={{ flex: 0.8 }}>
        <FlatList
          // contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}}
          keyExtractor={(item, index) => index}
          data={activities}
          extraData={refreshList}
          numColumns={3}
          // style={{flex: 0.8}}
          renderItem={({ item, index }) => (
            <Chip
              multiple
              hideIcon
              selection={selection}
              text={item.name}
              id={item.id}
              selectMultipleActivities={selectMultipleActivities}
              setRefreshList={setRefreshList}
              refreshList={refreshList}
            />
          )}
        />
      </View>

      {/* <View style={{ flex: 0.8 }}></View> */}

      <Button
        text="Continue"
        onPress={() => navigation.navigate("MoodSelect")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    ...baseStyle.page,
  },
  introText: {
    ...textStyle.appBold,
    fontSize: 22,
    textAlign: "center",
    lineHeight: 31,
    marginBottom: 30,
  },
  introSubText: {
    color: baseStyle.grey1Color,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default SelectActivity;
