import React from "react";
import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sridhar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
