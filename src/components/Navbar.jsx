import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Agustina.woff";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setClick(false);
  };

  return (
    <div>
      <nav className="navbarX sticky main">
        <a href="" className="navbar-logoX"></a>
        <div className="menu-iconX" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menuX activeX" : "nav-menuX"}>
          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#main")}
            >
              Home
            </Link>
          </li>

          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#aboutme")}
            >
              About Me
            </Link>
          </li>
          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#whatido")}
            >
              Tech Stack
            </Link>
          </li>
          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#skill")}
            >
              Skills
            </Link>
          </li>

          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#projects")}
            >
              Projects
            </Link>
          </li>
          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#whatidoStasti")}
            >
              Statistics
            </Link>
          </li>
          <li className="nav-itemX">
            <Link
              to="/s"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#contact")}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
