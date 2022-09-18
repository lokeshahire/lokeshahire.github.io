import React from "react";
import { links } from "../data";
import { SocialIcon } from "react-social-icons";
import { ValidationError, useForm } from "@formspree/react";
import Fade from "react-reveal/Fade";

import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvzgqdd");

  if (state.succeeded) {
    alert("Thanku for joining");
  }
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1>

      <center>
        <div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input type="text" name="name" required />
              <label>Email</label>
              <input type="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label>Subject</label>
              <input type="text" name="subject" required />
              <label>Message</label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <textarea
                rows="5"
                placeholder="Type Your Message Here"
                name="message"
                required
              />
              <button className="Btn" type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <p id="emailPhone">
          <a href="tel:+918308229465">📞+91 7042421211</a>{" "}
          <a href="mailto:iamlokeshahire@gmail.com" target="_blank" id="email">
            {" "}
            📧 Iamlokeshahire@.gmail.com
          </a>
        </p>
        <div className="icon">
          {links.map((link) => (
            <div className="icons">
              <SocialIcon url={link} target="_blank" />{" "}
            </div>
          ))}
        </div>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Lokesh Ahire</b> using ⚛️
      </p>
    </div>
  );
};

export default Contact;
