import React from "react";

import mint from "../../assets/images/mint-ghost.png";
import peach from "../../assets/images/peach-ghost.png";

import "./HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <div className="ghost-shadow mint">
        <img src={mint} alt="mint shadow" />
      </div>
      <div className="ghost-shadow peach">
        <img src={peach} alt="peach shadow" />
      </div>
      <div className="container" id="main">
        <div className="hero-wrapper fade-in-fwd">
          <div className="hero">
            Hi, my name is Paulina and I am
            <br />
            <div className="hero-animation">
              <div className="words-carousel">
                <ul>
                  <li className="gradient-text imp">reliable</li>
                  <li className="gradient-text imp">hard-working</li>
                  <li className="gradient-text imp">consistent</li>
                  <li className="gradient-text imp">passionate</li>
                  <li className="gradient-text imp">creative</li>
                </ul>
              </div>
            </div>
            <br />
            <span className="imp gradient-text">front-end developer</span>
            .
            <br />
            Please, take a look around to find out more about me and my work.
          </div>
        </div>
      </div>
    </>
  );
};
