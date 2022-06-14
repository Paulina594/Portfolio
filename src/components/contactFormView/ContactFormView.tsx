import React, { FormEvent, useEffect } from "react";

import { ContactFormStatus, ContactMessage } from "../contactForm/ContactForm";

import "./ContactFormView.scss";

export type ContactFormViewProps = {
  onFormSubmit: (contactData: ContactMessage) => any;
  formSubmitStatus: ContactFormStatus;
  setSubmitStatus: () => void;
};

export const ContactFormView = (props: ContactFormViewProps) => {
  const { onFormSubmit, formSubmitStatus, setSubmitStatus } = props;

  useEffect(() => {
    if (formSubmitStatus === 1) {
      (document.getElementById("form") as HTMLFormElement).reset();
    }

    return () => setSubmitStatus();
  }, [setSubmitStatus, formSubmitStatus]);

  function submitForm(submitEvent: FormEvent): void {
    submitEvent.preventDefault();

    const formData = new FormData(submitEvent.currentTarget as HTMLFormElement);

    const fields: ContactMessage = {
      fullName: formData.get("name") + "",
      email: formData.get("email") + "",
      body: formData.get("message") + "",
      surname: formData.get("surname") + "",
    };

    onFormSubmit(fields);
  }

  const submitBtn = (
    <button type="submit" className="submitBtn">
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
  );

  return (
    <>
      <form id="form" onSubmit={(submitEvent) => submitForm(submitEvent)}>
        <label>
          <input name="name" type="text" placeholder="Name" required />
        </label>
        <label>
          <input name="email" type="email" placeholder="E-mail" required />
        </label>
        <label>
          <textarea name="message" placeholder="Message" rows={15} required />
        </label>
        <input
          id="surname"
          name="surname"
          size={40}
          type="text"
          placeholder="Surname"
        />
        {submitBtn}
      </form>
    </>
  );
};
