import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: Array.from({ length: 1 }, () => 0),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.values[action.payload.index] += 1;
    },
    decrement: (state, action) => {
      state.values[action.payload.index] -= 1;
    },
    set: (state, action) => {
      state.values[action.payload.index] = action.payload.value;
    },
    setCounters: (state, action) => {
      state.values = Array.from({ length: action.payload }, () => 0);
    },
  },
});

export const { increment, set, decrement, setCounters } = counterSlice.actions;
export default counterSlice.reducer;
