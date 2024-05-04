import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar_2.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen} from "./Icon"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            <span>CodeBucks</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>

            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;