import React from "react";
import { NavLink } from "react-router-dom";

type MenuItem = { id: number; path: string; itemName: string };

const menuList: MenuItem[] = [
  { id: 1, path: "/", itemName: "Home" },
  { id: 2, path: "/about", itemName: "About Me" },
  { id: 3, path: "/technologies", itemName: "Technologies" },
  { id: 4, path: "/projects", itemName: "Projects" },
  { id: 5, path: "/contact", itemName: "Contact" },
];

export const Menu = (props: { click?: () => void }) => {
  const menu = menuList.map((item: MenuItem) => (
    <NavLink key={item.id} to={item.path} onClick={props.click}>
      {item.itemName}
    </NavLink>
  ));

  return <>{menu}</>;
};
