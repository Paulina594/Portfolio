import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import "./ContactPage.scss";

export const ContactPage = () => {
  const contact = (
    <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#112;&#97;&#117;&#108;&#105;&#110;&#97;&#46;&#100;&#114;&#111;&#122;&#100;&#122;&#46;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
      <i className="fa-solid fa-at" />
      &#112;&#97;&#117;&#108;&#105;&#110;&#97;&#46;&#100;&#114;&#111;&#122;&#100;&#122;&#46;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
    </a>
  );

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
              You can also send me an e&#8209;mail on:
            </div>
            <div className="email-link">{contact}</div>
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
              <button className="submitBtn">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      />
                    </svg>
                  </div>
                </div>
                <span>Send</span>
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
