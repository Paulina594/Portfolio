import React from "react";
import { NavLink } from "react-router-dom";

import { Typewriter } from "../../components/typewriter/Typewriter";

import mint from "../../assets/images/mint-ghost.png";
import peach from "../../assets/images/peach-ghost.png";

import "./HomePage.scss";

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
      <div className="hero-container">
        <div className="hero-wrapper fade-in-fwd">
          <div className="hero">
            Hi, my name is Paulina and I am
            <br />
            <div className="typewriter-wrapper">
              {<Typewriter words={words} />}
            </div>
            <span className="imp gradient-text">
              front&#8209;end developer.
            </span>
            Please, take a look around to find out more about me and my work.
            <div className="button">
              <NavLink to="/projects">
                <button className="btn-a">
                  Jump straight to <span>my projects!</span>
                </button>
              </NavLink>
              <a
                href="https://pl.linkedin.com/in/paulina-drozdz-reliable-front-end-developer"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-b">
                  or check my CV <span>on LinkedIn</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="cv-pointer-wrapper">*/}
      {/*  <div className="cv-pointer">*/}
      {/*    or check my CV on LinkedIn*/}
      {/*    <img*/}
      {/*      className="first-arrow"*/}
      {/*      src={arrowPM}*/}
      {/*      alt="arrow made of dotts, starting with color peach, ending in mint"*/}
      {/*    />*/}
      {/*    <img*/}
      {/*      className="second-arrow"*/}
      {/*      src={arrowMP}*/}
      {/*      alt="arrow made of dotts, starting with color mint, ending in peach"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
