import React, { useRef, useState, useEffect } from "react";
import NavBar from "../ShareComponents/NavBar";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  emailjs.init(process.env.REACT_APP_USER_ID);
  console.log(USER_ID);

  const formRef = useRef(null);

  const goForward = (e) => {
    e.preventDefault();
    sendEmail(); // Trigger the sendEmail function

    if (formRef.current.checkValidity()) {
      navigate("/contact/messagereceived");
    } else {
      // Handle form validation errors
      setEmailError("Please fill in all required fields.");
    }
  };

  const validateEmail = () => {
    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.match(validRegex)) {
      // Valid email address
      setEmailError("");
    } else if (email === "") {
      setEmailError("Email is empty!");
    } else {
      // Invalid email address
      setEmailError("Invalid email address!");
    }
  };

  function handleEmailBlur(e) {
    e.preventDefault();
    validateEmail(e.target.value);
  }

  useEffect(() => {
    const formElement = formRef.current;

    const handleFormSubmit = (e) => {
      e.preventDefault();
      sendEmail();
    };

    formElement.addEventListener("submit", handleFormSubmit);

    return () => {
      // Cleanup: remove the event listener
      formElement.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  const sendEmail = () => {
    console.log("Sending email...");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        navigate("/contact/messagereceived");
      },
      function (error) {
        console.log("i am user_id", USER_ID);
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="overall-container">
      <NavBar />
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.47843136364!2d-74.11808636666852!3d40.70563057829406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647611355151!5m2!1sen!2sbd"
              width="600"
              height="300"
              loading="lazy"
              title="Google Map"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form ref={formRef} action="#" className="form" data-form="true">
            <div className="input-wrapper">
              <input
                type="text"
                name="user_name"
                className="form-input"
                placeholder="Example Name"
                required
                data-form-input
              />

              <input
                type="email"
                name="user_email"
                className="form-input"
                placeholder="example@domain.com"
                required
                data-form-input
                value={email}
                onBlur={handleEmailBlur}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="email-error-message">{emailError}</p>
              )}
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
            ></textarea>

            <button
              className="form-btn"
              onClick={goForward}
              type="submit"
              data-form-btn
              value="Send"
            >
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}
