import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";

import Tilt from "react-parallax-tilt";

function Experience() {
  return (
    <Container fluid className="home-about-section" id="experience">
      <Container>
        <Row>
          <h1 style={{ fontSize: "2.6em", fontWeight: "bold", color: "red" }}>
            EXPERIENCE
          </h1>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={require("../../Assets/liqvdasia.png")}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
          <Col md={1}></Col>
          <Col md={7} className="home-about-description">
            <p className="home-about-body">
              <h2>Role : Jr Frontend Developer</h2>
              <br />
              <strong>Duration : October 2023 - Present</strong>
              <br />
              <br />
              <ul>
                <li>
                  Developed and optimized the{" "}
                  <a
                    href="https://liqvd.asia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    LIQVD ASIA
                  </a>{" "}
                  company website, ensuring full responsiveness with GreenSock
                  (GSAP) animations to improve user interaction and overall site
                  performance.
                </li>
                <li>
                  Developed and maintained responsive web pages for{" "}
                  <a
                    href="https://icicidemo.liqvd.com/demo/senior-citizen-v2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    ICICI
                  </a>{" "}
                  using ReactJS, implementing strong JavaScript validation.
                </li>
                <li>
                  Developed the{" "}
                  <a
                    href="https://infinouniverse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    INFINO
                  </a>{" "}
                  website, making it fully responsive and rich in animations
                  using GreenSock.
                </li>
                <li>
                  Worked on{" "}
                  <a
                    href="https://wemadeinindia.liqvd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    WeMadeIndia
                  </a>
                  ,{" "}
                  <a
                    href="https://liqvd.com/demo/indian_gaming_convention/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    {" "}
                    IndiaGaming
                  </a>
                  , and{" "}
                  <a
                    href="https://liqvd.com/demo/imanage_new/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    iManage
                  </a>{" "}
                  websites in frontend development, ensuring responsive and
                  dynamic user interfaces.
                </li>
                <li>
                  Designed the{" "}
                  <a
                    href="https://liqvd.com/demo/indospace_brochure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    IndoSpace brochure
                  </a>{" "}
                  , implementing advanced scroll animations using ScrollReveal
                  and JavaScript.
                </li>
                <li>
                  Developed some{" "}
                  <a
                    href="https://digiboxx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    DigiBoxx
                  </a>{" "}
                  website pages, incorporating responsive design, worked on meta
                  tags, and WordPress theme.
                </li>
              </ul>
              <strong>Tech Stack</strong>: ReactJS, GreenSock, HTML, CSS,
              Bootstrap, SASS, JavaScript, PHP, WordPress, Responsive Design.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Experience;
