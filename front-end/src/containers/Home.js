import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { setAuthComponent } from "../reducers/authNavSlice";


const Home = () => {
  //use UseSelector to access current auth Component
  const currAuthCompo = useSelector((state) => state.authNav.currComponent);
  console.log(currAuthCompo);

  const dispatch = useDispatch();
  //create instance of dispatch to change component
  const authDispatch = (component) => {
    dispatch(setAuthComponent(component));
  };



  let render = <Login />;
  //assign appropriate component to render
  if(currAuthCompo === 'login') render = <Login authDispatch={authDispatch}/>;
  else if(currAuthCompo === 'signup') render = <Signup authDispatch={authDispatch}/>;

  return (
    <div className="contain">
      <div className="title">
        <h1>Have 'Ya Touched Grass Bruv?</h1>
      </div>
      <div className="compo">{render}</div>
    </div>
  );
};

export default Home;
