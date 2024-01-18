import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";

// const BrowserRouter = createBrowserRouter();

const AppContainer = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default AppContainer;
