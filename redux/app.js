import { createSlice } from "@reduxjs/toolkit";
import { ClockIcon, BeakerIcon } from "react-native-heroicons/outline";
import { baseStyle } from "../src/assets/styles/base";

const initialState = {
  authMode: "professional",
  onboarding: {
    currentStage: 1,
    stages: 3,
  },
  quotes: [
    "Be kind to yourself. Remember, you are doing the best you can with what you know at this moment.",
    "Your mental health is just as important as your physical health.",
    "Strength doesn't come from what you can do; it comes from overcoming the things you once thought you couldn't.",
    "You are not defined by your struggles, but by how you overcome them.",
    "Mental illness is not a sign of weakness; it's a sign of strength because you're still fighting.",
    "Healing may not be easy, but it's possible. Keep going.",
    "You are not alone in this battle; there is hope and help available.",
    "Your value is not determined by your productivity. You are valuable just as you are.",
    "In the darkest moments, remember that stars can't shine without darkness.",
    "Taking care of your mental health is an act of self-love.",
    "Your story isn't over; there are beautiful chapters yet to be written.",
  ],
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
  moodReasons: ["FAMILY", "ACADEMICS", "HEALTH", "FRIENDSHIP", "RELATIONSHIPS"],
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
