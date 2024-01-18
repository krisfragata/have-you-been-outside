import React from "react";

const SuccessSign = ({authDispatch}) => {

  //handles routing to login page
  const routeToLogin = () => {
    // navigate("/auth/signup");
    console.log("go back to Login");
    authDispatch("login");
  };

  return(
      <div className="auth">
        <p>Successful Signup!</p>
        <button type="submit" onClick={routeToLogin} >
          Login
        </button>
      </div>
  )
}

export default SuccessSign;