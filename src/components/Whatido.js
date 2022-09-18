import React from "react";
import { whatido } from "../data";
import Fade from "react-reveal/Fade";
import "./Whatido.css";
import Logo from "./Logo";
const Whatido = () => {
  return (
    <Fade bottom cascade>
      <section id="whatido">
        <h1 className="Whatido-title" id="whatido-title">
          <Fade bottom cascade>
            {" "}
            TECH STACKS{" "}
          </Fade>
        </h1>

        <div className="fluid-container logodesign">
          <div className="row">
            <div className="col-lg-7 center order-first order-lg-last">
              <h2
                style={{ marginLeft: "330px", width: "100%" }}
                className="fullstack"
              >
                {whatido.title}
              </h2>
              <div className="fluid-container logodesign logo">
                <div style={{ marginLeft: "330px", width: "100%" }} class="row">
                  {whatido.logos.map((logo) => (
                    <Logo
                      key={logo.id}
                      name={logo.name}
                      className={logo.iconifyClassName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Whatido;
