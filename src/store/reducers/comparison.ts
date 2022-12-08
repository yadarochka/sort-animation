import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComparisonState {
  inProgress: boolean;
  sortingSpeed: number;
  activeElements: number[];
  sortedElements: number[];
  auxiliaryElements: number[];
}

const initialState: ComparisonState = {
  inProgress: false,
  sortingSpeed: 1,
  activeElements: [],
  sortedElements: [],
  auxiliaryElements: [],
};

export const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    reset: (state) => {
      state = { ...initialState, sortingSpeed: state.sortingSpeed };
    },
    toggleSort: (state, action: PayloadAction<boolean>) => {
      state.inProgress = action.payload;
    },
    setSortingSpeed: (state, action: PayloadAction<number>) => {
      state.sortingSpeed = action.payload;
    },
    setActiveElements: (state, action: PayloadAction<number[]>) => {
      state.activeElements = action.payload;
    },
    setAuxilinaryElements: (state, action: PayloadAction<number[]>) => {
      state.auxiliaryElements = action.payload;
    },
    setSortedElements: (state, action: PayloadAction<number[]>) => {
      state.sortedElements = action.payload;
    },
  },
});

export const {
  reset,
  toggleSort,
  setActiveElements,
  setAuxilinaryElements,
  setSortedElements,
  setSortingSpeed,
} = comparisonSlice.actions;

export default comparisonSlice.reducer;
