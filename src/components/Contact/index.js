import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      // console.log(isValid)
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required for submission.`)
      } else {
        setErrorMessage('')
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }


  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="container contact">
      <h1>Drop me a line.</h1>
      <br />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What should I call you?</label>
          <input type="text" defaultValue={name} onChange={handleChange} style={{ width: "100%" }} name="name" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Got an email?</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} style={{ width: "100%" }} />
        </div>
        <br />
        <div>
          <label htmlFor="message">What's on your mind?</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" style={{ width: "100%" }} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;