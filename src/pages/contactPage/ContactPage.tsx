import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import "./ContactPage.scss";

export const ContactPage = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Get in touch!</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-left slide-in-fwd-center">
            Any questions or thoughts?
            <br />
            Want to ask something, get my resume or just say 'Hi!' ?<br />
            Feel free to drop me a message.
            <br />
            I'd love to hear from you!
            <br />
            <br />
            <br />
            <div className="email-contact">
              You can also send me an e-mail on:
            </div>
            <div className="email-link">
              <a href="mailto: paulina.drozdz.me@gmail.com">
                <i className="fa-solid fa-at" /> paulina.drozdz.me@gmail.com
              </a>
            </div>
          </div>
          <div className="col-right fade-in">
            <form>
              <label htmlFor="name">
                <input type="text" placeholder="Name" />
              </label>
              <label htmlFor="email">
                <input type="email" placeholder="E-mail" />
              </label>
              <label htmlFor="message">
                <textarea placeholder="Message" rows={20} />
              </label>
              <button className="send" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="social-wrapper ">
        <div className="social-section bounce-in-top">
          <p className="social-contact">Or contact me via social media</p>
          <FontAwesomeIcon className="arrows" icon={faAnglesDown} />
        </div>
      </div>
    </>
  );
};
