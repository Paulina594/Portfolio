import React, { useState } from "react";
import { ContactFormView } from "../contactFormView/ContactFormView";
import { toast } from "react-hot-toast";

export interface ContactMessage {
  fullName: string;
  email: string;
  body: string;
  surname: string;
}

export enum ContactFormStatus {
  INITIAL,
  SUCCESS,
  ERROR,
}

export const ContactForm = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState<ContactFormStatus>(
    ContactFormStatus.INITIAL
  );

  const endpoint = "http://localhost:8080/send-mail";

  function sendMail2(message: ContactMessage): Promise<any> {
    return fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Server returned ${response.status} response!`);
        setFormSubmitStatus(ContactFormStatus.ERROR);
      }
      setFormSubmitStatus(ContactFormStatus.SUCCESS);
    });
  }

  function onFormSubmit(message: ContactMessage) {
    toast.promise(sendMail2(message), {
      loading: "Sending...",
      success: <b>Thanks for your message! It has been sent successfully.</b>,
      error: (
        <b>
          Sorry, there was a problem sending your message. Please, try again
          later.
        </b>
      ),
    });
  }

  return (
    <>
      <ContactFormView
        formSubmitStatus={formSubmitStatus}
        setSubmitStatus={() => setFormSubmitStatus(ContactFormStatus.INITIAL)}
        onFormSubmit={(message) => onFormSubmit(message)}
      />
    </>
  );
};
