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
            {/* https://formsubmit.co/documentation */}
            <form
              action="https://formsubmit.co/iamlokeshahire@gmail.com"
              method="POST"
              target="blank"
            >
              <label>Name :</label>
              <input
                style={{ marginBottom: "20px", marginTop: "20px" }}
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
              <label>Email :</label>
              <input
                style={{ marginTop: "20px" }}
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <label>Subject :</label>
              <input
                style={{
                  marginTop: "20px",
                  height: "150px",
                  borderRadius: "20px",
                }}
                type="text"
                name="Subject"
                placeholder="Your Subject"
                required
              />

              <input type="hidden" name="_captcha" value="false" />

              <button
                onClick={() => {
                  window.location.reload();
                }}
                id="sendbtn"
                type="submit"
              >
                Send
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
