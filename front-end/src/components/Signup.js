import React from "react";
import { useSelector, UseDispatch, useDispatch } from "react-redux";
import { showSignupErrors } from "../reducers/authNavSlice";

const Signup = ({ authDispatch }) => {
  const popup = useSelector((state) => state.authNav.signupErrors);
  const dispatch = useDispatch();
  const errorDispatch = (visibility) => {
    dispatch(showSignupErrors(visibility));
  };

  //handle signup errors
  const handleError = (response) => {
    if (response.validEmail && response.validUsername) routeToSuccess();
    else {
      errorDispatch({ visibility: "visible", message: response.message });
    }
  };

  const handleSignup = () => {
    const newEmail = document.querySelector("#new-email");
    const newUsername = document.querySelector("#new-username");
    const newPassword = document.querySelector("#new-password");

    const signupBody = {
      email: newEmail.value,
      username: newUsername.value,
      password: newPassword.value,
    };

    console.log(signupBody);

    fetch("../api/signup", {
      method: "POST",
      body: JSON.stringify(signupBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        handleError(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const routeToSuccess = () => {
    // navigate("/auth/signup");
    console.log("go back to Login");
    // const currAuthCompo = useSelector((state) => state.authNav.currComponent);
    // console.log(currAuthCompo);
    authDispatch("success");
  };

  return (
      <div className="auth">
        <div
          className="popup"
          id="invalid-signup"
          style={{ visibility: popup.visibility }}
        >
          <p>{popup.message}</p>
        </div>
        <div className="input">
          <input
            name="email"
            type="text"
            placeholder="email"
            id="new-email"
          ></input>
          <input
            name="username"
            type="text"
            placeholder="username"
            id="new-username"
          ></input>
          <input
            name="password"
            type="password"
            placeholder="password"
            id="new-password"
          ></input>
        </div>
        <button type="submit" onClick={handleSignup}>
          Signup
        </button>
      </div>
  );
};

export default Signup;
