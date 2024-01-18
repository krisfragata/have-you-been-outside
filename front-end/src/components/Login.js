import React from "react";
// allows server to route to different pages
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { displayUser } from "../reducers/feedSlice";
import { showPopup } from "../reducers/authNavSlice";
import oAuth from "../../public/assets/google.png"

const Login = ({ authDispatch, navDispatch }) => {
  //grab state of popupvisibility
  let popup = useSelector((state) => state.authNav.popup);

  //dispatch username to feed
  const dispatch = useDispatch();

  const userDispatch = (user) => {
    dispatch(displayUser(user));
  };

  const popupDispatch = (visibility) => {
    dispatch(showPopup(visibility));
  };

  //handle authentication depending on fetch response
  const handleAuth = (response) => {
    if (response.userExists) {
      navDispatch("q");
      userDispatch(response.username);
    } else {
      popupDispatch("visible");
    }
  };

  //declare a function that routes
  const handleLogin = () => {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const loginBody = { username: username.value, password: password.value };

    fetch("../api/login", {
      method: "POST",
      body: JSON.stringify(loginBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        return handleAuth(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handle route to signup
  const routeToSignup = () => {
    // navigate("/auth/signup");
    console.log("go signup");
    authDispatch("signup");
  };

  return (
      <div className="auth">
        <button id="oauth">
          <img src={oAuth}></img>
        </button>
        <div className="popup" id="invalid-user" style={{ visibility: popup }}>
          <p>invalid username or password. Try again!</p>
        </div>
        <div className="input">
          <input
            name="username"
            type="text"
            placeholder="username"
            id="username"
          ></input>
          <input
            name="password"
            type="password"
            placeholder="password"
            id="password"
          ></input>
        </div>

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      
        <button type="button" onClick={routeToSignup}>
          Don't have an account? Signup
        </button>
      </div>
  );
};

export default Login;
