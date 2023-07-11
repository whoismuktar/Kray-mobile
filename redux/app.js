import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboarding: {
    currentStage: 1,
    stages: 3,
  },
  categories: [
    {
      id: "sleep",
      name: "Sleep",
    },
    {
      id: "mindfulness",
      name: "Mindfulness",
    },
    {
      id: "reading",
      name: "Reading",
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
    },
    {
      id: "listening",
      name: "Listening",
    },
    {
      id: "journaling",
      name: "Journaling",
    },
    {
      id: "healthyHabits",
      name: "Healthy Habits",
    },
    {
      id: "affirmations",
      name: "Affirmations",
    },
    {
      id: "breathing",
      name: "Breathing",
    },
  ],
  userCategories: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOnboardingCurrentStage: (state, action) => {
      state.onboarding.currentStage = action.payload;
    },
    setUserPartyCategories: (state, action) => {
      console.log({ state });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnboardingCurrentStage } = appSlice.actions;

export default appSlice.reducer;
