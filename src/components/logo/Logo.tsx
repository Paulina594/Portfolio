import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.scss";

export const Logo = () => {
  return (
    <NavLink to="/">
      <div className="logo shine">
        <span className="initial p">p</span>aulina
        <span className="initial d">d</span>rożdż
      </div>
    </NavLink>
  );
};
