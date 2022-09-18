import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { main } from "../data";

import "./Main.css";

function Main() {
  return (
    <section className="mainX" id="main">
      <div className="fluid-container">
        <Zoom duration={1000}>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="mobile">
                <p id="lokeshahire" align="center">
                  <a>
                    <img
                      className="nameImg"
                      src="https://readme-typing-svg.herokuapp.com?font=&size=48&duration=2000&pause=&multiline=true&width=700&height=500&lines=Hello ,+ I'm + Lokesh+ Ahire"
                      alt="Typing SVG"
                    />
                  </a>
                </p>

                <h1 className="main-title d">{main.doamin}</h1>

                <a
                  href={require("../documents/LokeshResume.pdf")}
                  download="LokeshResume"
                >
                  <button value="download">RESUME</button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 ani">
              <img
                className="aboutme-img"
                height="auto"
                width="400"
                src={
                  "https://miro.medium.com/max/875/1*iOPDlRRFiSlml918GyEzUA.png"
                }
                alt="profile pic"
              />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Main;
