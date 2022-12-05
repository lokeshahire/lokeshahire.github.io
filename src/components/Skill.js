import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skill() {
  return (
    <Container fluid className="home-about-section" id="skill">
      <Container>
        <Row>
          <Col md={0} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: "bold" }}>SKILLS</h1>
            <p className="home-about-body">
              ⚡Data Structures and Algorithm
              <br />
              <br />
              ⚡FrontEnd Development
              <br />
              <br />
              ⚡Backend Development
              <br />
              <br />
              ⚡Communication Skills
              <br />
              <br />
              ⚡Building responsive website using HTML,CSS,JS,React
              <br />
              <br />
              ⚡Creating backend application in Node, ExpressJS
              <br />
              <br />
              ⚡Building Simple RESTful CRUD APIs
              <br />
              <br />
              ⚡Knowledge of MongoDB Database
              <br />
              <br />
              ⚡Knowledge of various UI libraries
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Skill;
