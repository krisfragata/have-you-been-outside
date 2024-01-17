//import configure store from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 

//initiate store
const store = configureStore({
  reducer: rootReducer,
});

export default store;