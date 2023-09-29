import React from "react";
import { View } from "react-native";
import { MapPinIcon, TagIcon } from "react-native-heroicons/outline";
import { CalendarIcon } from "react-native-heroicons/solid";
import Text from "./Text";
import Button from "./Button";
import { baseStyle } from "../assets/styles/base";
import { useNavigation } from "@react-navigation/core";
import { ImageBackground } from "react-native";
import MoonImg from "../assets/images/moon-earth.png";

const PlanCard = ({ professional, id }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        // marginBottom: 30,
        padding: 20,
        borderWidth: 1,
        borderColor: baseStyle.purple200,
        borderRadius: 10,
        backgroundColor: baseStyle.white,
        ...baseStyle.boxShadow,
      }}
      onPress={() =>
        navigation.navigate("Plan", {
          id,
        })
      }
    >
      <View
        style={{
          borderRadius: 5,
          width: "30%",
          height: 100,
          marginRight: 10,
        }}
      >
        <ImageBackground
          source={MoonImg}
          resizeMode="cover"
          style={{
            borderRadius: 5,
            width: "100%",
            height: "100%",
          }}
        ></ImageBackground>
      </View>

      <View style={{ flex: 1 }}>
        <Text type="paragraph3" style={{ marginBottom: 10 }}>
          {`Dr. ${professional.firstName} ${professional.lastName}`}
        </Text>
        <Text type="paragraph4">{professional.specialization}</Text>

        {professional?.location && <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MapPinIcon color={baseStyle.gray800} style={{ marginRight: 5 }} />
          <Text type="paragraph4">{`${professional.location}`}</Text>
        </View>}

        <Button
          text="Book a session"
          type="pryBtn"
          minimal
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("NewBooking", { profId: professional.id })}
        />
      </View>
    </View>
  );
};

export default PlanCard;
