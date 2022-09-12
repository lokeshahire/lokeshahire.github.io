import React from "react";
import { aboutme } from "../data";
// const Fade = require("react-reveal/Fade");
// //import Fade from "react-reveal/Fade";
import "./Aboutme.css";

function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <h1 className="title">
        <bottom>About ME</bottom>
      </h1>
      <div className="fluid-container">
        <div className="row">
          <div>
            <div className="col-lg-5 col-md-5 image">
              <img
                className="aboutme-img"
                height="auto"
                width="300"
                src={aboutme.imgLink}
                alt="profile pic"
              />
            </div>
          </div>
          <div>
            <div className="col-lg-7 col-md-7 text">
              <p>{aboutme.p1}</p>
              <p>{aboutme.p2}</p>
              <p>{aboutme.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
