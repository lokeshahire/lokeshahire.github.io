import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: "bold" }}>
              ABOUT&nbsp; ME
            </h1>
            <p className="home-about-body">
              Hey, My name is Lokesh Ahire. I have completed my Bachelor of
              Engineering from K.K.Wagh College of Engineering, Nashik(M.H.).
              <br />
              <br />
              Currently, I have expertise in C, C++, HTML, CSS, Bootstrap,
              JavaScript, React, Express, and MongoDB. I also have knowledge of
              SQL and Bit Manipulation. I would love to be a part of an
              innovative organization and use my programming skills to help
              bring creativity and innovation to the organization.
              <br />
              <br />
              Apart from programming, I enjoy playing sports ⚽, reading books
              📚, photography 📸, listening to music 🎵 and riding 🏍️.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={
                  "https://miro.medium.com/max/875/1*iOPDlRRFiSlml918GyEzUA.png"
                }
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
