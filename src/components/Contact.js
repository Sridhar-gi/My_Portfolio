import React from "react";
import "../styles.css";



const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        📧 Email: 
        <a
        style={{ color: "#87CEEB", textDecoration: "none", fontWeight: "bold" }}

        href="mailto:charliesri021@gmail.com" className="contact-link"> charliesri021@gmail.com</a>
      </p>
      <p>
        🔗 LinkedIn: 
        <a
        style={{ color: "#87CEEB", textDecoration: "none", fontWeight: "bold" }}
        
        href="https://www.linkedin.com/in/sridhar-s021" target="_blank" rel="noopener noreferrer"  
        >
          Sridhar Subramaian
        </a>
      </p>
    </div>
  );
};

export default Contact;

