import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100px" src="https://cdn.svgporn.com/logos/netlify.svg" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiPostman /> */}
        <img
          height="100px"
          src="https://cdn.svgporn.com/logos/vercel-icon.svg"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          height="100px"
          src="https://cdn.svgporn.com/logos/postman-icon.svg"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          height="100px"
          src="https://cdn.svgporn.com/logos/github-icon.svg"
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
