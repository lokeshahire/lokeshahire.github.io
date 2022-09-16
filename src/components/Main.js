import React from "react";
import { Zoom } from "react-reveal";
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
                  {/* <a
                    align="center"
                    href="https://github.com/lokeshahire/lokeshahire"
                  >
                    <img src="https://readme-typing-svg.herokuapp.com?color=0A88B3&size=35&lines=Hello + I'm + Lokesh+ Ahire" />
                  </a> */}
                  <a href="https://git.io/typing-svg">
                    <img
                      src="https://readme-typing-svg.herokuapp.com?font=&size=48&duration=2000&pause=&multiline=true&width=700&height=500&lines=Hello ,+ I'm + Lokesh+ Ahire"
                      alt="Typing SVG"
                    />
                  </a>
                </p>

                <h1 className="main-title d">{main.doamin}</h1>
                <a
                  href={main.resume}
                  target="_blank"
                  className="btn btn-lg hide"
                >
                  <button>RESUME</button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 ani">
              <img
                className="aboutme-img"
                height="auto"
                width="400"
                src={
                  "https://miro.medium.com/max/3000/1*LEuQpN9ocXffEVLx6Mftww.png"
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
