import React from "react";
import AppContainer from "./AppContainer";
import fullGrass from "../../public/assets/full-grass.png";

const MainContainer = () => {
  return (
    <div className="main-container">
      <AppContainer />
      <img src={fullGrass}></img>
    </div>
  );
};

export default MainContainer;
