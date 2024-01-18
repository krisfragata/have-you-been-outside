import React from "react";

const Signup = ({authDispatch}) => {

  const routeToLogin = () => {
    // navigate("/auth/signup");
    console.log("go back to Login");
    // const currAuthCompo = useSelector((state) => state.authNav.currComponent);
    // console.log(currAuthCompo);
    authDispatch("login");
  };

  return (
    <div className="compo">
      <form method="POST" action="/signup">
        <input name="email" type="text" placeholder="email"></input>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <button onClick={routeToLogin}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
