//import reducer combiner and other reducerse
import { combineReducers } from "@reduxjs/toolkit";
import authNavReducer from "./authNavSlice";
import navReducer from "./navSlice";
import feedReducer from './feedSlice';

const rootReducer = combineReducers({
  authNav: authNavReducer,
  nav: navReducer,
  feed: feedReducer
});

export default rootReducer;
