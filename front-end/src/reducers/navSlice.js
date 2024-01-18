import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    currComponent: "home", // || feed || profile
  },
  reducers: {
    setNavComponent: (state, action) => {
      state.currComponent = action.payload;
    },
  },
});

export const { setNavComponent } = navSlice.actions;
export default navSlice.reducer;
