import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="surreal-estate-logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
