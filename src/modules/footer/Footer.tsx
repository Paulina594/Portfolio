import React from "react";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="social-container">
          <i className="fa-brands fa-linkedin-in social" />
          <i className="fa-brands fa-github social" />
          <i className="fa-brands fa-whatsapp social" />
          <i className="fa-brands fa-facebook social" />
        </div>
        <p className="copyrights">© Copyright 2022. All rights reserved</p>
        <div className="line left" />
        <div className="line right" />
      </div>
    </div>
  );
};
