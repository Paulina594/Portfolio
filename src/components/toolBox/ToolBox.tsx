import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./ToolBox.scss";

export const ToolBox = () => {
  return (
    <>
      <FontAwesomeIcon className="settings" icon={faGear} />
      <div className="setting-box">
        <label className="switch mode">
          <input type="checkbox" />
          <span className="slider round" />
          <FontAwesomeIcon className="setting-icons moon" icon={faMoon} />
          <FontAwesomeIcon className="setting-icons sun" icon={faSun} />
        </label>
        <label className="switch language">
          <input type="checkbox" />
          <span className="slider round" />
          <div className="setting-icons eng">EN</div>
          <div className="setting-icons pol">PL</div>
        </label>
      </div>
    </>
  );
};
