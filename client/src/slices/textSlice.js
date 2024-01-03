import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const textSlice = createSlice({
  name: "text",
  initialState : initialState,
  reducers: {
    setText: (state, action) => {
      state = action.payload;
      return state;
    },

    setClickText: (state, action) => {
      state = state +" "+action.payload;
      return state;
    },

      
    
  },
});

export const { setText,setClickText } = textSlice.actions;

export default textSlice.reducer;
