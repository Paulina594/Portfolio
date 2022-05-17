import React from "react";

import blue from "../images/blue-ghost.png";
import coral from "../images/coral-ghost.png";

import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    // <div className="container">
    <>
      <div className="ghost-shadow blue">
        <img src={blue} alt="blue shadow" />
      </div>
      <div className="ghost-shadow coral">
        <img src={coral} alt="coral shadow" />
      </div>
      <div className="main">
        <p className="hero">
          Hi, my name is Paulina and I am
          <br />
          <span className="imp gradient-text">front-end developer</span>.<br />
          Please, take a look around to find out more about me and my work.
        </p>
      </div>
    </>
  );
};
