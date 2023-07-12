import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 3,
    username: "martha",
    firstName: "Martha",
    lastName: "Kent",
    // profileImage: userAvatar1,
    bio: "A food enthusiast",
  },
  userActivities: [
    {
      title: "Sleep",
      description: "Sleeper",
      description: "Sleeper",
      unit: "time",
      unitAmount: "10 mins"
    },
    {
      title: "Sleep",
      description: "Sleeper",
      description: "Sleeper",
      unit: "time",
      unitAmount: "10 mins"
    },
    {
      title: "Sleep",
      description: "Sleeper",
      description: "Sleeper",
      unit: "time",
      unitAmount: "10 mins"
    },
  ],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOnboardingCurrentStage: (state, action) => {
      state.onboarding.currentStage = action.payload;
    },
    setUserPartyActivities: (state, action) => {
      console.log({ state });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnboardingCurrentStage } = appSlice.actions;

export default appSlice.reducer;
