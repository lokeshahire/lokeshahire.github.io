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
              demoLink="https://lokesh-jcrew-clone.netlify.app//"
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
              demoLink="https://netmedclone-akash-alok-ashish-lokesh-parv-pooja.netlify.app/"
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
              demoLink="https://clockify-me-clone.netlify.app/"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/875/1*5okRkZpCr3qWTrOq_Mapeg.png"
              }
              isBlog={false}
              title="Todo App"
              description="A small Todo app to keep the our Todos"
              ghLink="https://github.com/lokeshahire/Todo-List-with-All-Functionality"
              demoLink="https://lokesh-todo-all-functionality.netlify.app/"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/875/1*-HK33ZnwNYx-QQxv4s0eFg.png"
              }
              isBlog={false}
              title="Admission Database"
              description="It is help to make Admission Database with the help of simple steps"
              ghLink="https://lokesh-masai-admission.netlify.app/"
              demoLink="https://github.com/lokeshahire/Masai-Admission-DataBase"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={
                "https://miro.medium.com/max/875/1*m-0B4yRN7r6HaUTBCyetjg.png"
              }
              isBlog={false}
              title="EMPLOYEE RECORDS"
              description="It's a EMPLOYEE RECORDS App to Records different catergories of Employees,
  Recipe of the day."
              ghLink="https://github.com/lokeshahire/Masai-Employee-Records"
              demoLink="https://lokesh-u2c3-masai-employee-records.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
