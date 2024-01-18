import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    user: 'newUser',
    feedId: 0,
    userId: 0,
    posts: []
  },
  reducers: {
    displayUser: (state, action) =>{
      state.user = action.payload;
    }
  }
});

export const { displayUser } = feedSlice.actions;
export default feedSlice.reducer;