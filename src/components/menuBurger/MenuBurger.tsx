import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Menu } from "../Menu";

import "./MenuBurger.scss";

function useComponentVisible(initialIsVisible: boolean, ref: any) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

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

export const MenuBurger = () => {
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
