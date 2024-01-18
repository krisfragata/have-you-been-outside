//import reducer combiner and other reducerse
import { combineReducers } from "@reduxjs/toolkit";
import authNavReducer from "./authNavSlice";

const rootReducer = combineReducers({
  authNav: authNavReducer,
});

export default rootReducer;
