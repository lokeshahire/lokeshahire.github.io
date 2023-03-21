import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaBeer, FaLinkedinIn } from "react-icons/fa";

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
              SQL and Bit Manipulation. Apart from programming, I enjoy playing
              sports ⚽, reading books 📚, photography 📸, listening to music 🎵
              and riding 🏍️.
              <div>
                {/* <li className="social-icons" style={{ height: "50px", width: "50px" }}> */}

                <a
                  href="https://github.com/lokeshahire"
                  style={{ fontSize: "70px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokesh-ahire-30a184207/"
                  style={{ marginLeft: "70px", fontSize: "70px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="mailto: iamlokeshahire@gmail.com"
                  style={{ marginLeft: "70px", fontSize: "70px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CgMail />


                </a>
                {/* </li> */}
              </div>
              <br />
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={
                  "https://miro.medium.com/max/640/1*Fw9mfaVWjH7sw5NzssuPBQ.webp"
                }
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
