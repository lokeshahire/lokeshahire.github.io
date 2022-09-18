import React from "react";
import { whatido } from "../data";
import Fade from "react-reveal/Fade";
import "./Skills.css";
const Whatido = () => {
  return (
    <Fade bottom cascade>
      <section id="skill">
        <h1 className="skill-title" id="skill-title">
          <Fade bottom cascade>
            {" "}
            SKILLS{" "}
          </Fade>
        </h1>

        <div class="fluid-container">
          <div className="row skillRow">
            <div
              style={{ marginLeft: "400px" }}
              className="col-lg-5 vertical-center skillRow"
            >
              <div className="box">
                {whatido.details.map((detail) => (
                  <p>⚡{detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Whatido;
