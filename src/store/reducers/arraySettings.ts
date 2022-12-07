import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArraySettingsState {
  array: number[];
  arrayLength: number;
}

const initialState: ArraySettingsState = {
  array: [],
  arrayLength: 30,
};

export const arraySettingsSlice = createSlice({
  name: "arraySettings",
  initialState,
  reducers: {
    setArray: (state, action: PayloadAction<number[]>) => {
      state.array = action.payload;
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.arrayLength = action.payload;
    },
  },
});

export const { setArray, setLength } = arraySettingsSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default arraySettingsSlice.reducer;
