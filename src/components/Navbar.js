import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [click, setClick] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const closeMobileMenu = (id) => {
    const container = document.querySelector(id);
    container.scrollIntoView({ behavior: "smooth", block: "start" });
    setClick(false);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={
              "https://logos.textgiraffe.com/logos/logo-name/Lokesh-designstyle-cartoon-m.png"
            }
            className="img-fluid logo"
            alt="brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => closeMobileMenu("#about")}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => closeMobileMenu("#tech")}
              >
                Tech Stack
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => closeMobileMenu("#skill")}
              >
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => closeMobileMenu("#project")}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => closeMobileMenu("#statistics")}
              >
                Statistics
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => closeMobileMenu("#contact")}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Navbar.Brand style={{ marginTop: "7px", marginLeft: "13px" }}>
              {/* <Button> */}
              <a
                href={require("../documents/LokeshAhireResume.pdf")}
                alt="brand"
                download="LokeshResume"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Resume
              </a>
              {/* </Button> */}
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
