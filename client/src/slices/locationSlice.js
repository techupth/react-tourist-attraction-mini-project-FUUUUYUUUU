import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const locationSlice = createSlice({
  name: "text",
  initialState : initialState,
  reducers: {
    setLocation: (state, action) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const {setLocation} = locationSlice.actions;

export default locationSlice.reducer;
