import React from "react";

import mint from "../../assets/images/mint-ghost.png";
import peach from "../../assets/images/peach-ghost.png";

import "./HomePage.scss";
import { Typewriter } from "../../components/typewriter/Typewriter";

export const HomePage = () => {
  const words = [
    "reliable",
    "hard-working",
    "consistent",
    "passionate",
    "creative",
  ];
  return (
    <>
      <div className="ghost-shadow mint">
        <img className="scale-up-center-ghost" src={mint} alt="mint shadow" />
      </div>
      <div className="ghost-shadow peach">
        <img className="scale-up-center-ghost" src={peach} alt="peach shadow" />
      </div>
      {/*<div className="container">*/}
      <div className="hero-wrapper fade-in-fwd">
        <div className="hero">
          Hi, my name is Paulina and I am
          <br />
          <div className="typewriter-wrapper">
            {<Typewriter words={words} />}
          </div>
          <span className="imp gradient-text">front-end developer.</span>
          Please, take a look around to find out more about me and my work.
        </div>
      </div>
      {/*</div>*/}
    </>
  );
};
