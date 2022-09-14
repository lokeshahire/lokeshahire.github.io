import React from "react";
import { whatido } from "../data";
import Fade from "react-reveal/Fade";
import "./Skills.css";
const Whatido = () => {
  return (
    <Fade bottom cascade>
      <section id="whatido">
        <h1 className="Whatido-title" id="whatido-title">
          <Fade bottom cascade>
            {" "}
            SKILLS{" "}
          </Fade>
        </h1>

        <div class="fluid-container">
          <div className="row">
            <div
              style={{ marginLeft: "400px" }}
              className="col-lg-5 vertical-center"
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
