import { configureStore } from "@reduxjs/toolkit";
import arraySettings from "./reducers/arraySettings";
import comparison from "./reducers/comparison";

export const store = configureStore({
  reducer: {
    arraySettings: arraySettings,
    comparison: comparison,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
