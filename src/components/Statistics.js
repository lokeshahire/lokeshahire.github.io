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

        <div id="statCircle" class="fluid-container rowcircle">
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
        <div id="statCala" className="Calander">
          <GitHubCalendar username="lokeshahire" />
        </div>
        <div id="gitStat">
          <div align="center">
            <img
              style={{ height: "300px" }}
              src="https://github-readme-stats.vercel.app/api?username=lokeshahire&count_private=true&theme=algolia"
              alt="lokeshahire's GitHub stats"
            />
          </div>
          <div align="center">
            <img
              style={{ height: "400px", marginTop: "50px" }}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=lokeshahire&langs_count=8&theme=algolia"
              alt="lokeshahire's GitHub stats"
            />
          </div>
          <div align="center">
            <img
              style={{ height: "300px", marginTop: "50px" }}
              src="https://github-readme-streak-stats.herokuapp.com/?user=lokeshahire"
              alt="lokeshahire's GitHub stats"
            />
          </div>
          <br />
          <br />
          <div align="center">
            <img src="https://activity-graph.herokuapp.com/graph?username=lokeshahire&show_icons=true&count_private=true&include_all_commits=true&theme=minimal&hide_border=true&radius=4" />
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Statistics;
