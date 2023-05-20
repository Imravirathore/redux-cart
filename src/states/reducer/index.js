import { createSlice } from "@reduxjs/toolkit";
export const incdecSlice = createSlice({
  name: "incedec",
  initialState: 1,
  reducers: {
    Inc: (state, action) => {
      return (state += 1);
    },
    Dec: (state, action) => {
      return (state -= 1);
    },
  },
});

export const { Inc, Dec } = incdecSlice.actions  // +,- wali functionality ko export kr rhe h
export default incdecSlice.reducer