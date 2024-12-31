import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container
      fluid
      className="about-section"
      id="about"
      style={{ paddingTop: "5rem" }}
    >
      <Particle />
      <Container>
        <h1
          style={{
            fontSize: "2.6em",
            fontWeight: "bold",
          }}
        >
          TECH STACKS
        </h1>
        <Techstack />
        <Toolstack />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
