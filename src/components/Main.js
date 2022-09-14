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
                <h1 className="lokeshTitle">Hello, I am Lokesh Ahire</h1>
                {/* <h1 className="main-title n" id="name">
                  I am Lokesh Ahire
                </h1> */}
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
