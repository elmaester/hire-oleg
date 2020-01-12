import React, { useState } from "react";
import ContactForm from "./styled/ContactForm";

const Form = ({ lang }) => {
  let ru = lang === "ru";

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        email: "",
        message: ""
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <ContactForm>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">
          {ru
            ? "Ваш Email (чтобы я мог Вам ответить)"
            : "Your Email (so that I can reply to you)"}
        </label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">{ru ? "Сообщение" : "Message"}</label>
        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          rows={6}
        />
        <button
          type="submit"
          disabled={status.submitting}
          style={{
            fontFamily: "inherit",
            display: "block",
            margin: "1vw auto"
          }}
        >
          {!status.submitting
            ? !status.submitted
              ? ru
                ? "Отправить"
                : "Send"
              : ru
              ? "Отправлено"
              : "Sent"
            : ru
            ? "Отправляю..."
            : "Sending..."}
        </button>
      </form>
    </ContactForm>
  );
};

export default Form;
