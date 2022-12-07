import { configureStore } from "@reduxjs/toolkit";
import arraySettings from "./reducers/arraySettings";

export const store = configureStore({
  reducer: {
    arraySettings: arraySettings,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
