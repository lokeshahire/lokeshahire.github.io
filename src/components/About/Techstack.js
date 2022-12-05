import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Container id="tech">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          {/* <CgCPlusPlus /> */}
          <img
            height="100px"
            src="https://cdn.svgporn.com/logos/css-3.svg"
          ></img>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            height="100px"
            src="https://cdn.svgporn.com/logos/javascript.svg"
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img height="100px" src="https://cdn.svgporn.com/logos/nodejs.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img height="100px" src="https://cdn.svgporn.com/logos/react.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            height="100px"
            width="100px"
            src="https://cdn.svgporn.com/logos/mongodb.svg"
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            height="100px"
            src="https://cdn.svgporn.com/logos/nextjs-icon.svg"
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiGit /> */}
          <img
            height="100px"
            src="https://cdn.svgporn.com/logos/git-icon.svg"
          ></img>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            height="100px"
            src="https://img.icons8.com/color/344/chakra-ui.png"
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            height="100px"
            src="https://cdn.svgporn.com/logos/typescript-icon.svg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
