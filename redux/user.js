import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProfAuth: false,
  isProfAccount: true,
  appointmentRequests: [1,2,3,4,5,6,7,8,9],
  user: {
    id: 3,
    username: "YOY",
    firstName: "Yusuf",
    lastName: "Yusuf",
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
      firstName: "Alex",
      lastName: "Morgan",
      location: "London",
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
      firstName: "Alex",
      lastName: "Morgan",
      location: "London",
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
  },
});

// Action creators are generated for each case reducer function
export const {setIsProfAuth} = appSlice.actions;

export default appSlice.reducer;
