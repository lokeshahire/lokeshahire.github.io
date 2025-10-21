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
              I am Lokesh Ahire, a Frontend Developer with over one year of
              experience and a strong foundation in Full Stack Development from
              MASAI School. My skills include HTML, CSS, Bootstrap, SASS,
              JavaScript, ReactJS, Redux, NodeJS, ExpressJS, TypeScript,
              MongoDB, and GSAP for animations.
              <br /> <br /> Currently, I work as a Frontend Developer at LIQVD
              ASIA, contributing to projects like ICICI pages, Digiboxx Website,
              WeMadeInIndia, Indian Gaming Convention, Indospace, iManage
              website, and the INFINO website. I have also worked on AI chatbot
              projects with Bard and OpenAI API integrations. I am passionate
              about creating user-centric, engaging digital products and thrive
              in collaborative environments. I like playing sports ⚽, reading
              books 📚, photography 📸, listening to music 🎵 and riding 🏍️.
              <br /> <br />
              {/* <div>
                <a
                  href="https://github.com/lokeshahire"
                  style={{ fontSize: "70px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokeshahire"
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
              </div> */}
              <br />
              <br />
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={
                  "https://miro.medium.com/max/640/1*Fw9mfaVWjH7sw5NzssuPBQ.webp"
                }
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
