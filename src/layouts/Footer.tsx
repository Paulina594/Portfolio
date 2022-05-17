import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="social-container">
          <FontAwesomeIcon className="social linkedin" icon={faLinkedin} />
          <FontAwesomeIcon className="social git" icon={faGithub} />
          <FontAwesomeIcon className="social fb" icon={faWhatsapp} />
          <FontAwesomeIcon className="social whatsapp" icon={faFacebook} />
        </div>
        <p className="copyrights">© Copyright 2022. All rights reserved</p>
        <div className="line left" />
        <div className="line right" />
      </div>
    </div>
  );
};
