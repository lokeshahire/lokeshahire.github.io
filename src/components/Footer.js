import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>👨‍💻 with ❤️ by Lokesh Ahire using ⚛️</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li
              className="social-icons"
              style={{ height: "50px", width: "50px" }}
            >
              <a
                href="https://github.com/lokeshahire"
                style={{ color: "white", fontSize: "30px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li
              className="social-icons"
              style={{ height: "50px", width: "50px" }}
            >
              <a
                href="https://www.linkedin.com/in/lokeshahire"
                style={{ color: "white", fontSize: "30px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto: iamlokeshahire@gmail.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                iamlokeshahire@gmail.com
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/lokeshahire"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 8421997242
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
