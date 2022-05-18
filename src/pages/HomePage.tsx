import React from "react";

import mint from "../images/mint-ghost.png";
import peach from "../images/peach-ghost.png";

import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    // <div className="container">
    <>
      <div className="ghost-shadow blue">
        <img src={mint} alt="mint shadow" />
      </div>
      <div className="ghost-shadow coral">
        <img src={peach} alt="peach shadow" />
      </div>
      <div className="container">
        <div className="hero-wrapper">
          <p className="hero">
            Hi, my name is Paulina and I am
            <br />
            <span className="imp gradient-text">front-end developer</span>.
            <br />
            Please, take a look around to find out more about me and my work.
          </p>
        </div>
      </div>
    </>
  );
};
