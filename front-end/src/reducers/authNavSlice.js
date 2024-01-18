import { createSlice } from "@reduxjs/toolkit";

const authNavSlice = createSlice({
  name: "auth-nav",
  initialState: {
    currComponent: "login", // || signup
    popup: 'hidden',
    signupErrors: {visibility: 'hidden', message: ''}
  },
  reducers: {
    setAuthComponent: (state, action) => {
      state.currComponent = action.payload;
    },
    showPopup: (state, action) => {
      state.popup = action.payload;
    },
    showSignupErrors: (state, action) => {
      state.signupErrors = action.payload;
    }
  },
});

export const { setAuthComponent, showPopup, showSignupErrors } = authNavSlice.actions;
export default authNavSlice.reducer;
