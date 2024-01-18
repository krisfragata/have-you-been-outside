import { createSlice } from "@reduxjs/toolkit";

const authNavSlice = createSlice({
  name: "auth-nav",
  initialState: {
    currComponent: "login", // || signup
  },
  reducers: {
    setAuthComponent: (state, action) => {
      state.currComponent = action.payload;
    },
  },
});

export const { setAuthComponent } = authNavSlice.actions;
export default authNavSlice.reducer;
