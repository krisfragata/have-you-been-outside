import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../components/Posts";

const Feed = () => {
  //access user's name and feed state
  const user = useSelector((state) => state.feed.user);
  const intro = `${user}'s Feed`;

  return (
    <div className="feed">
      <div className="header">
      <h1>{intro}</h1>
      <button>Find Friends</button>
      </div>
      <div className="posts-container">
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
