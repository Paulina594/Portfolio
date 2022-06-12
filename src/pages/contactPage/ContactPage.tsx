import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import "./ContactPage.scss";
import { ContactForm } from "../../components/contactForm/ContactForm";

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
            <p>Any questions or thoughts?</p>
            <p>
              Want to ask something, get my resume or just say 'Hi!' ?<br />
              Feel free to drop me a message.
            </p>
            <p>I'd love to hear from you!</p>
            <div className="email-contact">
              You can also send me an e&#8209;mail on:
            </div>
            <div className="email-link">{contact}</div>
          </div>
          <div className="col-right fade-in">
            <ContactForm />
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
