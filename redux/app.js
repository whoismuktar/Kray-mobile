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
    setState: (state, action) => {
      state.userPartyCategories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setState } = appSlice.actions;

export default appSlice.reducer;
