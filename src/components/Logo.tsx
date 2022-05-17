import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Logo.css"

export const Logo = () => {
  return (
    <NavLink to="/">
      <div className="logo shine">
      <span className="initial">p
      </span>aulina
        <span className="initial">d
      </span>rożdż</div></NavLink>
    )
}