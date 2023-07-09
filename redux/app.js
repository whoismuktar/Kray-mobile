import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboarding: {
    currentStage: 1,
    stages: 3,
  }
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
