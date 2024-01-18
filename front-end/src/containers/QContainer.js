import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Q = ({ navDispatch }) => {
  const user = useSelector((state) => state.feed.user);
  const q = `${user}!`;

  //handle how to navigate to feed once button is clicked
  const routeToFeed = () => {
    navDispatch('feed');
  }

  return (
    <div className="prompt">
      <h1>{q}</h1>
      <h2>Have you touched grass today? <br/> Looks like your friends have.
  <br />If you want to see what they're up to, prove to us that you went outside :)</h2>
      <div>
        <button onClick={routeToFeed}>I have, I promise!</button>
      </div>
    </div>
  );
};

export default Q;
