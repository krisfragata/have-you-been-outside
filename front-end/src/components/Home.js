import React from "react";

const Home = () => {

  const loginClick = () => {
    window.location.href = '/login';
  }

  return (
    <div className="contain">
      <div className="title">
        <h1>Have 'Ya Touched Grass Bruv?</h1>
      </div>
      <div className="compo">
        <form method="POST" action='/login'>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <button>Login</button>
          <button>Already have an account? Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
