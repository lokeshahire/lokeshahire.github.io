import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1
          className="project-heading"
          style={{ fontSize: "2.6em", fontWeight: "bold" }}
        >
          PROJECTS
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/875/1*ru80flR8vGGCsI9i0MKLKQ.png"
              }
              isBlog={false}
              title="J.Crew Clone Website"
              description="Shop JCrew.com for the Highest Quality Women's and Men's Clothing and see the entire selection of Children's Clothing, Cashmere Sweaters, Women's Dresses ."
              ghLink="https://github.com/lokeshahire/toothsome-week-3235"
              demoLink="https://jcrew-clone-lokesh.netlify.app/"
              techstack="  ReactJS |  NodeJS  |  MongoDB |  JSON   | API  |  ES6"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/875/1*uboqNnyPrdAiuT1Jd0GDpA.png"
              }
              isBlog={false}
              title="NetMeds.com Clone"
              description="At netmeds.com make a wide range of prescription medicines and other health products conveniently available all across India."
              ghLink="https://github.com/lokeshahire/NetMeds-Clone"
              demoLink="https://netmed-lokesh-alok-ashish-akash-pooja.netlify.app/"
              techstack="  HTML |  CSS  | JavaScript  | LocalStorage  |  API  |  ES6"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/875/1*OJDJxmmyvEt2wHWhALjFQw.png"
              }
              isBlog={false}
              title="Clockify Me Clone"
              description="Clockify is a time tracker and timesheet app"
              ghLink="https://github.com/lokeshahire/abrasive-trade-5771"
              demoLink="https://clockify-me-clone-lokesh.netlify.app/"
              techstack="  HTML  |  CSS  |  JavaScript  |  LocalStorage  |  API  |  ES6"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/828/1*tbMO2E4CTxGvC_6DigObzg.webp"
              }
              isBlog={false}
              title="Apna TV"
              description="Apna TV is an OTT platform that have movies and web series around the world in many languages."
              ghLink="https://github.com/lokeshahire/Apna-TV"
              demoLink="https://apnatv.vercel.app/"
              techstack="  ReactJS  |  ChakraUI   |  JSON  |  API  |  ES6 | NodeJS |  MongoDB"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://camo.githubusercontent.com/7bf822c2e59c552663fc4299963dc0c1812c2e561c8d25d9d13bc3364afe98cd/68747470733a2f2f692e706f7374696d672e63632f5a7134435a766d442f5765622d636170747572652d31392d31322d323032322d3137333131342d74696d656c792d63756375727563686f2d3162373735372d6e65746c6966792d6170702e6a7067"
              }
              isBlog={false}
              title="Skinstore-Clone"
              description="It is a collaborative project where we try to implement our best possible knowledge to showcase and try to grab attention of users where they are looking for beauty products"
              ghLink="https://github.com/lokeshahire/Skinstore-Clone"
              demoLink="https://timely-cucurucho-1b7757.netlify.app/"
              techstack="  ReactJS  |  ChakraUI   |  JSON  |  API  |  ES6  | NodeJS |  MongoDB"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/828/1*gWfhAxDSkJNRr3nE5RtmOw.webp"
              }
              isBlog={false}
              title="Toggl-Track-Clone"
              description="Toggl Track is a time tracking app that allows you to track your daily activities, you can set your tasks and also create your projects."
              ghLink="https://github.com/lokeshahire/toggl-track-clone"
              demoLink="https://toggl-time-tracking.vercel.app/"
              techstack="  ReactJS  |  ChakraUI   |  JSON  |  API  |  ES6  | NodeJS |  MongoDB"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
