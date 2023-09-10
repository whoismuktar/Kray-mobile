import React from "react";
import { View } from "react-native";
import {
  BriefcaseIcon,
  MapPinIcon,
  TagIcon,
} from "react-native-heroicons/outline";
import { CalendarIcon, CheckBadgeIcon } from "react-native-heroicons/solid";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { baseStyle } from "../../assets/styles/base";
import { useNavigation } from "@react-navigation/core";
import { ImageBackground } from "react-native";
import MoonImg from "../../assets/images/moon-earth.png";
import { useSelector } from "react-redux";

const PlanCard = ({ professional, id }) => {
  const { professionals } = useSelector((state) => state.user);
  const proUser = professionals[0];

  return (
    <View style={baseStyle.page}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          height: 120,
          marginBottom: 70,
        }}
      >
        <ImageBackground
          source={{
            uri: "https://filesamples.com/samples/image/png/sample_640%C3%97426.png",
          }}
          resizeMode="cover"
          style={{
            borderRadius: 5,
            width: "100%",
            height: "100%",
          }}
          imageStyle={{ borderRadius: 10 }}
        ></ImageBackground>
        <ImageBackground
          source={{
            uri: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team2.jpg",
          }}
          imageStyle={{ borderRadius: "100%" }}
          resizeMode="cover"
          style={{ width: 120, height: 120, marginTop: -70 }}
        ></ImageBackground>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Text
            type="paragraph3"
            style={{
              alignSelf: "center",
            }}
          >
            {`${proUser.prefix}. ${proUser.firstName} ${proUser.lastName}`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <CheckBadgeIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
            <Text type="paragraph4">{`${proUser.expYears} Years`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BriefcaseIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
          <Text type="paragraph4">{`${proUser.specialization}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MapPinIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
          <Text type="paragraph4">{`${proUser.location}`}</Text>
        </View>

        <View style={baseStyle.section}>
          <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
            About
          </Text>
          <Text type="paragraph4">{`${proUser.about}`}</Text>
        </View>

        <View style={baseStyle.section}>
          <Text weight="medium" type="paragraph3" style={{ marginBottom: 10 }}>
            Availability
          </Text>
          {proUser.availability.map((item, i) => {
            return <Text key={i} type="paragraph4">{`${item}`}</Text>;
          })}
        </View>
      </View>

      <Button text="Book A Session" type="pryBtn" style={{ marginTop: 40 }} />
    </View>
  );
};

export default PlanCard;
