import React from "react";
import { details } from "../data";
import ProjectData from "./ProjectData";
import Fade from "react-reveal/Fade";
import "./Project.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="project-title">
        <Fade bottom cascade>
          Projects
        </Fade>
      </h1>
      {details.map((prj) => (
        <ProjectData
          key={prj.id}
          title={prj.title}
          desc={prj.desc}
          tech={prj.tech}
          feature={prj.feature}
          img={prj.img}
          link={prj.link}
          github={prj.github}
        />
      ))}
    </section>
  );
};

export default Projects;
