import React from "react";
import AppContainer from "./AppContainer";
import fullGrass from "../../public/assets/full-grass.png";

const MainContainer = ({ classProp }) => {
  return (
    <div className="main-container">
      <AppContainer />
      <div className="footer">
        <img src={fullGrass} id="grass"></img>
      </div>
    </div>
  );
};

export default MainContainer;
