import React from "react";
import NavBar from "../NavBar";

export default function Contact() {
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.47843136364!2d-74.11808636666852!3d40.70563057829406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647611355151!5m2!1sen!2sbd
"
              width="600"
              height="300"
              loading="lazy"
              title="Google Map"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
            ></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              {/* <ion-icon name="paper-plane"></ion-icon> */}
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}
