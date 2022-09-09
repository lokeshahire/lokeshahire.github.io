import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbarX sticky">
        {/* <a href="" className="navbar-logoX" >
          {navbar_name}
        </a>
        <div className="menu-iconX" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
        <ul>
          <li className="nav-itemX">
            <Link to="/" className="nav-linksX">
              Home
            </Link>
          </li>

          <li className="nav-itemX">
            <Link to="/" className="nav-linksX">
              About Me
            </Link>
          </li>
          <li className="nav-itemX">
            <Link to="/" className="nav-linksX">
              Skills
            </Link>
          </li>

          <li className="nav-itemX">
            <Link to="/s" className="nav-linksX">
              Projects
            </Link>
          </li>
          <li className="nav-itemX">
            <Link to="/s" className="nav-linksX">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
