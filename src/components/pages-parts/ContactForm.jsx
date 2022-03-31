import React, { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = state;

  const submitContact = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">Contact form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          placeholder="Your name eg. smith"
          value={name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="group">
        <input
          type="email"
          className="group__control"
          placeholder="Your email eg. smith@gmail.com"
          value={email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div className="group">
        <textarea
          cols="12"
          rows="8"
          className="group__textarea"
          placeholder="Write your message eg. I have troubles"
          defaultValue={message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send email &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};

export default ContactForm;
