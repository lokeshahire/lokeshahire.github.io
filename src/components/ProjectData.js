import React from "react";
import Fade from "react-reveal/Fade";
import "./ProjectData.css";
import Tilt from "react-tilt";

const Project = (props) => {
  return (
    <div className="fluid-container">
      <h5 className="prj-title">
        <Fade bottom cascade>
          {props.title}
        </Fade>
      </h5>

      <div className="row projectRow">
        <div className="col-lg-6 project-t ">
          <Fade bottom cascade>
            <div>
              <p className="p">{props.desc}</p>
              <p className="p">
                <b>Features : </b>
                {props.feature}
              </p>
              <p className="p">
                <b>{props.tech}</b>
              </p>

              <span>
                {" "}
                <a id="a" target="_blank" href={props.github}>
                  <button>Source Code </button>
                </a>
              </span>

              <span>
                {" "}
                <a id="b" target="_blank" href={props.link}>
                  <button>Deploy link </button>
                </a>
              </span>
            </div>
          </Fade>
        </div>

        <div className="col-lg-6 img order-first order-lg-last mainImg">
          <a target="_blank" href={props.link}>
            <Tilt className="Tilt" options={{ max: 55 }}>
              <img src={props.img} className="img-fluid" alt={props.title} />
            </Tilt>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
