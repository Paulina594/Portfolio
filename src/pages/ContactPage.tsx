import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import "../styles/ContactPage.css";

export const ContactPage = () => {
  return (
    <>
      <h1 className="gradient-text">Get in touch!</h1>
      <div className="content-wrapper">
        <p className="contact-description">
          Any questions or thoughts?
          <br />
          Want to ask something, get my resume or just say 'Hi!' ?<br />
          Feel free to drop me a message.
          <br />
          I'd love to hear from you!
        </p>
        <br />
        <p className="email-contact">You can also send me an e-mail on:</p>
        <div className="email-link">
          <FontAwesomeIcon className="icon" icon={faAt} />
          <p className="email">paulina.drozdz.me@gmail.com</p>
        </div>
      </div>
      <div className="social-wrapper">
        <p className="social-contact">Or contact me via social media</p>
        <FontAwesomeIcon className="arrows" icon={faAnglesDown} />
      </div>
      <div className="form">
        <form>
          <label htmlFor="name">
            <input type="text" placeholder="Name" />
          </label>
          <label htmlFor="email">
            <input type="email" placeholder="E-mail" />
          </label>
          <label htmlFor="message">
            <textarea placeholder="Message" rows={20} cols={80} />
          </label>
          <button className="send" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
