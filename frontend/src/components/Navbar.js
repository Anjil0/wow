import React from "react";
import "../style/Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="navtext">
            <Link to="/">EML</Link>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="signin">
          <Link to="/signin">Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
