import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"> Portfolio</h1>
      <ul className="nav-links">
      <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;