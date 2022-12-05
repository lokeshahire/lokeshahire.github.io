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
              SQL and Bit Manipulation. Apart from programming, I enjoy playing
              sports ⚽, reading books 📚, photography 📸, listening to music 🎵
              and riding 🏍️.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={
                  "https://miro.medium.com/max/828/1*V9M9gZNBUin8oE1_EXu1ww.webp"
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
