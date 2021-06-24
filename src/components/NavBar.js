import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="surreal-estate-logo" />
      <ul className="navbar-links">
        <li>
          <Link className="navbar-links-item" to="/">
            View Properties
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item" to="/AddProperty">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
