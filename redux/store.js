import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
