import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Button, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container
        style={{ backgroundColor: "blue" }}
        fluid
        className="home-section"
        id="home"
      >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi &nbsp;There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M &nbsp;
                <strong className="main-name">LOKESH &nbsp; AHIRE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={
                  "https://static.wixstatic.com/media/2be1ce_864567900845418ebfd61e297637464d~mv2.gif"
                }
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
