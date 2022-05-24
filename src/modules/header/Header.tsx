import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

export const Menu = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About Me</NavLink>{" "}
    <NavLink to="/technologies">Technologies</NavLink>{" "}
    <NavLink to="/projects">Projects</NavLink>{" "}
    <NavLink to="/contact">Contact</NavLink>
  </>
);

function useComponentVisible(initialIsVisible: boolean, ref: any) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  console.log(ref);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { isComponentVisible, setIsComponentVisible };
}

const MenuBurger = () => {
  const menu = useRef(null);

  const { isComponentVisible, setIsComponentVisible } = useComponentVisible(
    false,
    menu
  );

  return (
    <div ref={menu}>
      {isComponentVisible ? (
        <FontAwesomeIcon
          className="menu-burger bars"
          icon={faXmark}
          onClick={() => setIsComponentVisible(false)}
        />
      ) : (
        <FontAwesomeIcon
          className="menu-burger xmark"
          icon={faBars}
          onClick={() => setIsComponentVisible(true)}
        />
      )}
      {isComponentVisible && (
        <div className="menu-burger-box scale-up-center">
          <div className="menu-burger-container">{<Menu />}</div>
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  return (
    <div className="navbar">
      <div className="logo shine">
        <Link to="/">
          <span className="initial first">p</span>aulina
          <span className="initial last">d</span>rożdż
        </Link>
      </div>
      <div className="menu">{<Menu />}</div>
      <div className="navbar-menu">{<MenuBurger />}</div>
    </div>
  );
};
