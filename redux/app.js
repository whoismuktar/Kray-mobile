import { createSlice } from "@reduxjs/toolkit";
import { ClockIcon, BeakerIcon } from "react-native-heroicons/outline";
import { baseStyle } from "../src/assets/styles/base";

const initialState = {
  onboarding: {
    currentStage: 1,
    stages: 3,
  },
  activities: [
    {
      id: "drinkWater",
      name: "Drink Water",
      icon: "🫤",
      unit: "volume",
    },
    {
      id: "sleep",
      name: "Sleep",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "mindfulness",
      name: "Mindfulness",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "reading",
      name: "Reading",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "listening",
      name: "Listening",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "journaling",
      name: "Journaling",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "healthyHabits",
      name: "Healthy Habits",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "affirmations",
      name: "Affirmations",
      icon: "🫤",
      unit: "time",
    },
    {
      id: "breathing",
      name: "Breathing",
      icon: "🫤",
      unit: "time",
    },
  ],
  unitIcons: [
    { unit: "time", icon: <ClockIcon color={baseStyle.gray500} /> },
    { unit: "volume", icon: <BeakerIcon color={baseStyle.gray500} /> },
  ],
  moods: [
    { name: "Happy", icon: "😃" },
    { name: "Sad", icon: "😔" },
    { name: "Tired", icon: "🥱" },
    { name: "Confused", icon: "🫤" },
    { name: "Angry", icon: "😡" },
  ],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOnboardingCurrentStage: (state, action) => {
      state.onboarding.currentStage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnboardingCurrentStage } = appSlice.actions;

export default appSlice.reducer;
