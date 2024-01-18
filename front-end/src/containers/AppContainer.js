import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Feed from "./FeedContainer";
import Q from './QContainer';
import { setNavComponent } from "../reducers/navSlice";

// const BrowserRouter = createBrowserRouter();

const AppContainer = () => {

  //grab current state of nav.currComponent
  const currComponent = useSelector(state => state.nav.currComponent);
  const dispatch = useDispatch();
  const navDispatch = (navPayload) => {
    dispatch(setNavComponent(navPayload))
  }

  
  const render = () => {
    if (currComponent === 'home') return <Home navDispatch={navDispatch}/>;
    if (currComponent === 'q') return  <Q navDispatch={navDispatch} />;
    else if (currComponent === 'feed') return <Feed navDispatch={navDispatch} />;
    else return null
  };


  return (
    <div className="app">
      {render()}
    </div>
  );
};

export default AppContainer;
