import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  userId: null,
  userDetails: {},
  isProfAuth: false,
  isProfAccount: false,
  appointmentRequests: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  user: {
    id: 3,
    username: "YOY",
    firstName: "Alex",
    lastName: "Morgan",
    bio: "A food enthusiast",
  },
  userGoals: [],
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
      title: "Water",
      description: "Daily water intake",
      unit: "volume",
      type: "drinkWater",
      unitAmount: "3",
    },
    {
      title: "Sleep Exercise",
      description: "Night Sleep Activity",
      unit: "time",
      type: "sleep",
      unitAmount: "8 hrs",
    },
    {
      title: "Daily Gratitude",
      description: "Mindful Activity",
      unit: "time",
      type: "mindfulness",
      unitAmount: "10 mins",
    },
  ],
  professionals: [
    {
      prefix: "Dr",
      firstName: "Alex",
      lastName: "Morgan",
      location: "London",
      about:
        "I am Alex Morgan, an experienced anxiety therapist dedicated to helping individuals find relief and empowerment in their mental health journey.",
      availability: [
        "Mon-Wed ( 9:00 AM - 2:00 PM )",
        "Mon-Wed ( 9:00 AM - 2:00 PM )",
      ],
      specialization: "Anxiety Therapist",
      expYears: 8,
    },
    {
      prefix: "Dr",
      firstName: "Riddick",
      lastName: "Banks",
      location: "South Africa",
      about:
        "I am Alex Morgan, an experienced anxiety therapist dedicated to helping individuals find relief and empowerment in their mental health journey.",
      availability: [
        "Mon-Wed ( 9:00 AM - 2:00 PM )",
        "Mon-Wed ( 9:00 AM - 2:00 PM )",
      ],
      specilization: "Anxiety Therapist",
      expYears: 8,
    },
    {
      prefix: "Dr",
      firstName: "Jonathan",
      lastName: "Smith",
      location: "Paris",
      about:
        "I am Alex Morgan, an experienced anxiety therapist dedicated to helping individuals find relief and empowerment in their mental health journey.",
      availability: [
        "Mon-Wed ( 9:00 AM - 2:00 PM )",
        "Mon-Wed ( 9:00 AM - 2:00 PM )",
      ],
      specilization: "Anxiety Therapist",
      expYears: 8,
    },
  ],
};

export const appSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsProfAuth: (state, action) => {
      state.isProfAuth = action.payload;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    destroyAccessToken: (state, action) => {
      state.access_token = null;
      state.isProfAccount = false;
      state.isProfAuth = false;
    },
    setUserGoals: (state, action) => {
      state.userGoals = action.payload;
    },
    setUserPlans: (state, action) => {
      state.userPlans = action.payload;
    },
    setAllHealthProf: (state, action) => {
      state.professionals = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsProfAuth,
  setAccessToken,
  setUserId,
  setUserDetails,
  destroyAccessToken,
  setUserGoals,
  setUserPlans,
  setAllHealthProf
} = appSlice.actions;

export default appSlice.reducer;
