import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { baseStyle } from "../../../assets/styles/base";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Stepper from "../../../components/Stepper";
import Booking from "../../../components/Booking";
import { CalendarIcon, CheckCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import Chip from "../../../components/Chip";
import { BriefcaseIcon, MapPinIcon } from "react-native-heroicons/outline";

const Plan = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={baseStyle.page}>
      <Booking />

    </ScrollView>
  );
};

export default Plan;
