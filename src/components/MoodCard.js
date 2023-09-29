import { View } from "react-native";
import { useSelector } from "react-redux";
import Text from "./Text";
import { baseStyle } from "../assets/styles/base";

function MoodCard({ activity }) {
  const { activities, unitIcons } = useSelector((state) => state.app);

  const getActivityType = (name) => activities.find((a) => name === a.id);
  const getUnitIcon = (unit) => unitIcons.find((u) => unit === u.unit);
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: baseStyle.gray200,
        borderRadius: 8,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text type="header1">{activity.title}</Text>
        <Text type="paragraph4" style={{ marginBottom: 10 }}>
          {activity.description}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text>{getUnitIcon(activity.unit).icon}</Text>
          <Text style={{ marginLeft: 10 }}>{activity.unitAmount}</Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 40 }}>{getActivityType(activity.type)?.icon}</Text>
      </View>
    </View>
  );
}

export default MoodCard;
