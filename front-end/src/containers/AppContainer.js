import React from "react";
import Home from "../components/Home";
import grass from "../../public/assets/grass.png";
import fullGrass from '../../public/assets/full-grass.png';

const AppContainer = () => {
  return (
    <div className="app app-bg">
      <Home />
      <div className="grass-container">
        {/* <img src={fullGrass} id="grass"></img> */}
      </div>
    </div>
  );
};

export default AppContainer;
