import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li >
            <Link to="/" className="navbar__buttons">Home Page</Link>
          </li>
          <li>
            <Link to="/about" className="navbar__buttons">About</Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar__buttons">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar__buttons">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
