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
        <h2
          // style={{ marginLeft: "330px", width: "100%" }}
          className="fullstack"
          id="fullstack"
        >
          {whatido.title}
        </h2>
        <div className=" row myrow">
          {whatido.logos.map((logo) => (
            <Logo
              key={logo.id}
              name={logo.name}
              className={logo.iconifyClassName}
            />
          ))}
        </div>
      </section>
    </Fade>
  );
};

export default Whatido;
