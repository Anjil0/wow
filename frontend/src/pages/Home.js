import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <div className="hometext">
        <h1>Explore our services and contact us for more information</h1>
        <h2>24 hours available</h2>
        <div className="buttons">
          <div className="button1">
            <Link to="/services">Our Services</Link>
          </div>
          <div className="button2">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
