import React from "react";

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
      <div className="card">
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>TECHNOLOGY</p>
        <p>IMAGES</p>
      </div>
      <div className="card">
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>TECHNOLOGY</p>
        <p>IMAGES</p>
      </div>
      <div className="card">
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>TECHNOLOGY</p>
        <p>IMAGES</p>
      </div>
    </section>
  );
};

export default Projects;
