import React from "react";
// allows server to route to different pages
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = ({ authDispatch }) => {
  const routeToSignup = () => {
    // navigate("/auth/signup");
    console.log("go signup");
    // const currAuthCompo = useSelector((state) => state.authNav.currComponent);
    // console.log(currAuthCompo);
    authDispatch("signup");
  };

  return (
    <div className="compo">
      <form method="POST" action="/api/login">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="Login" className=".button"></input>
        <button type="button" onClick={routeToSignup}>
          Already have an account? Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
