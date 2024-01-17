import React from "react";
import Home from "../components/Home";
import grass from "../../public/assets/grass.png";
import fullGrass from "../../public/assets/full-grass.png";

const page = <Home />

const AppContainer = () => {
  return (
    <div className="app">
      {page}
    </div>
  );
};

export default AppContainer;
