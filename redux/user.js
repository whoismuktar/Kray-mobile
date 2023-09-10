import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 3,
    username: "martha",
    firstName: "Martha",
    lastName: "Kent",
    bio: "A food enthusiast",
  },
  userPlans: [
    {
      title: "Meditation & Mindfulness",
      progress: "25",
      tag: "Self-care",
      timeline: "weekly",
      startDate: "10th July",
      endDate: "16th July 2023 ",
    },
    {
      title: "Meditation & Mindfulness",
      progress: "0",
      tag: "Self-care",
      timeline: "weekly",
      startDate: "10th July",
      endDate: "16th July 2023 ",
    },
    {
      title: "Meditation & Mindfulness",
      progress: "100",
      tag: "Self-care",
      timeline: "weekly",
      startDate: "10th July",
      endDate: "16th July 2023 ",
    },
    {
      title: "Meditation & Mindfulness",
      progress: "50",
      tag: "Self-care",
      timeline: "weekly",
      startDate: "10th July",
      endDate: "16th July 2023 ",
    },
    {
      title: "Meditation & Mindfulness",
      progress: "4",
      tag: "Self-care",
      timeline: "weekly",
      startDate: "10th July",
      endDate: "16th July 2023 ",
    },
  ],
  userActivities: [
    {
      title: "Sleep",
      description: "Sleeper",
      description: "Sleeper",
      unit: "time",
      unitAmount: "10 mins",
    },
    {
      title: "Sleep",
      description: "Sleeper",
      description: "Sleeper",
      unit: "time",
      unitAmount: "10 mins",
    },
    {
      title: "Sleep",
      description: "Sleeper",
      description: "Sleeper",
      unit: "time",
      unitAmount: "10 mins",
    },
  ],
};

export const appSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export default appSlice.reducer;
