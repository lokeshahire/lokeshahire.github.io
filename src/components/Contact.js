import React from "react";
import { links } from "../data";
import { SocialIcon } from "react-social-icons";

import Fade from "react-reveal/Fade";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link} target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        <p id="emailPhone">
          <a href="tel:+918308229465">📞+91 7042421211</a>{" "}
          <a href="mailto:iamlokeshahire@gmail.com" target="_blank" id="email">
            {" "}
            📧 Iamlokeshahire@.gmail.com
          </a>
        </p>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Lokesh Ahire</b> using ⚛️
      </p>
    </div>
  );
};

export default Contact;
