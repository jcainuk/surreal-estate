import React from "react";
import "../styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li>
          <img src={logo} className="logo" alt="surreal-estate-logo" />
        </li>
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
