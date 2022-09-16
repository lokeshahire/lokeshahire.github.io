import React from "react";
import { whatido } from "../data";
import Fade from "react-reveal/Fade";
import "./Statistics.css";
const Statistics = () => {
  return (
    <Fade bottom cascade>
      <section id="whatidoStasti">
        <h1 className="whatidoStasti-title" id="whatidoStasti-title">
          <Fade bottom cascade>
            {" "}
            STATISTICS{" "}
          </Fade>
        </h1>

        <div class="fluid-container">
          <div className="row">
            <div className="coding leftcoding">
              <div className="circle"></div>
              <h2 className="circle-title">Hours</h2>
              <p className="circle-subtitle">of Full Stack Coding</p>
            </div>

            <div className="coding">
              <div className="circle"></div>
              <h2 className="circle-title">Git</h2>
              <p className="circle-subtitle">Commits</p>
            </div>

            <div className="coding">
              <div className="circle"></div>
              <h2 className="circle-title">Projets</h2>
              <p className="circle-subtitle">Done</p>
            </div>

            <div className="coding">
              <div className="circle"></div>
              <h2 className="circle-title">Hours</h2>
              <p className="circle-subtitle">of Soft Skills</p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Statistics;
