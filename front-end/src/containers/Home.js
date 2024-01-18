import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";
import Signup from "../components/Signup";
import SuccessSign from "../components/SuccessSign";
import { setAuthComponent } from "../reducers/authNavSlice";
import donny from "../../public/assets/donny.png";

const Home = ({ navDispatch }) => {
  //use UseSelector to access current auth Component
  const currAuthCompo = useSelector((state) => state.authNav.currComponent);

  const dispatch = useDispatch();
  //create instance of dispatch to change component
  const authDispatch = (component) => {
    dispatch(setAuthComponent(component));
  };

  let render = <Login />;
  //assign appropriate component to render
  if (currAuthCompo === "login")
    render = <Login authDispatch={authDispatch} navDispatch={navDispatch} />;
  else if (currAuthCompo === "signup")
    render = <Signup authDispatch={authDispatch} />;
  else if (currAuthCompo === "success")
    render = <SuccessSign authDispatch={authDispatch} />;

  return (
    <div className="contain">
      <div className="title">
        <h1>Have 'Ya Touched Grass Bruv?</h1>
      </div>
      <div className="compo">
        <div id="icon">
          <img src={donny} id="donny"></img>
        </div>
        {render}
      </div>
    </div>
  );
};

export default Home;
