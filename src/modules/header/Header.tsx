import React from "react";
import { Link } from "react-router-dom";

import { MenuBurger } from "../../components/menuBurger/MenuBurger";
import { Menu } from "../../components/Menu";

import "./Header.scss";

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
