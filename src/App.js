import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Statistics from "./components/Statistics";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Home />
      <About />
      <Skill />
      <Projects />

      {/* <Route path="/resume" element={<Resume />} /> */}
      <Statistics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
