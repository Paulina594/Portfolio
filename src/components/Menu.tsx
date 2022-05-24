import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About Me</NavLink>{" "}
    <NavLink to="/technologies">Technologies</NavLink>{" "}
    <NavLink to="/projects">Projects</NavLink>{" "}
    <NavLink to="/contact">Contact</NavLink>
  </>
);
