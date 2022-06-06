import React from "react";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer slide-in-bottom">
        <div className="social-container">
          <a
            href="https://pl.linkedin.com/in/paulina-drozdz-reliable-front-end-developer"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in social" />
          </a>
          <a
            href="https://github.com/Paulina594"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github social" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=48575363003"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp social" />
          </a>
          <a
            href="https://www.facebook.com/Paaulinaaa94"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook social" />
          </a>
        </div>
        <p className="copyrights">
          © Designed and build with love <span>by Paulina Drożdż</span>
        </p>
        <div className="line left" />
        <div className="line right" />
      </div>
    </div>
  );
};
