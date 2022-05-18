import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.scss";

export const Menu = () => (
  <>
    <NavLink to="/about">About Me</NavLink>{" "}
    <NavLink to="/technologies">Technologies</NavLink>{" "}
    <NavLink to="/projects">Projects</NavLink>{" "}
    <NavLink to="/contact">Contact</NavLink> {/*<div className="menu-item">*/}
    {/*  */}
    {/*  <div className="underline"></div>*/}
    {/*</div>*/}
    {/*<div className="menu-item">*/}
    {/* */}
    {/*  <div className="underline"></div>*/}
    {/*</div>*/}
    {/*<div className="menu-item">*/}
    {/* */}
    {/*  <div className="underline"></div>*/}
    {/*</div>*/}
    {/*<div className="menu-item">*/}
    {/*  <div className="underline"></div>*/}
    {/*</div>*/}
  </>
);

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          {/*<img src={logo} alt="logo" />*/}
          <NavLink to="/">
            <span className="initial first">p</span>aulina
            <span className="initial last">d</span>rożdż
          </NavLink>
        </div>
        <div className="menu">{<Menu />}</div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <FontAwesomeIcon
            className="menu-burger bars"
            icon={faXmark}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FontAwesomeIcon
            className="menu-burger xmark"
            icon={faBars}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-burger-box scale-up-center">
            <div className="menu-burger-container">{<Menu />}</div>
          </div>
        )}
      </div>
    </div>
  );
};
