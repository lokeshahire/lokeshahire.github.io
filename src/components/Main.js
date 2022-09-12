import React from "react";

import { main } from "../data";
import "./Main.css";

function Main() {
  return (
    <section className="mainX" id="main">
      <div className="fluid-container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="mobile">
              <h1 className="main-title n" id="name"></h1>
              <h1 className="main-title d">{main.doamin}</h1>
              <a href={main.resume} target="_blank" className="btn btn-lg hide">
                <span>RESUME</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ani"></div>
        </div>
      </div>
    </section>
  );
}

export default Main;
