import React from "react";
import Fade from "react-reveal/Fade";
import "./Statistics.css";
import { Heading, VStack } from "@chakra-ui/react";

import GitHubCalendar from "react-github-calendar";
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

        <div class="fluid-container rowcircle">
          <div className="row rowcircle">
            <div className="coding leftcoding">
              <div className="circle">
                <h2 className="innerCircle">1200+</h2>
              </div>
              <h2 className="circle-title">Hours</h2>
              <p className="circle-subtitle">of Full Stack Coding</p>
            </div>

            <div className="coding">
              <div className="circle">
                <h2 className="innerCircle">170+</h2>
              </div>
              <h2 className="circle-title">Git</h2>
              <p className="circle-subtitle">Commits</p>
            </div>

            <div className="coding">
              <div className="circle">
                <h2 className="innerCircle">20+</h2>
              </div>
              <h2 className="circle-title">Projets</h2>
              <p className="circle-subtitle">Done</p>
            </div>

            <div className="coding">
              <div className="circle">
                <h2 className="innerCircle">100+</h2>
              </div>
              <h2 className="circle-title">Hours</h2>
              <p className="circle-subtitle">of Soft Skills</p>
            </div>
          </div>
        </div>
        <div className="Calander">
          <GitHubCalendar username="lokeshahire" />
        </div>
      </section>
    </Fade>
  );
};

export default Statistics;
