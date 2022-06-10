import React, { useState } from "react";
import { ContactFormView } from "../contactFormView/ContactFormView";

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

  async function sendMail(message: ContactMessage): Promise<any> {
    if (message.surname !== "") {
      setFormSubmitStatus(ContactFormStatus.SUCCESS);
    } else {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setFormSubmitStatus(ContactFormStatus.SUCCESS);
      } else {
        setFormSubmitStatus(ContactFormStatus.ERROR);
      }
    }
  }

  return (
    <>
      <ContactFormView
        formSubmitStatus={formSubmitStatus}
        setSubmitStatus={() => setFormSubmitStatus(ContactFormStatus.INITIAL)}
        onFormSubmit={(message) => sendMail(message)}
      />
    </>
  );
};
