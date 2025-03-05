import React, { useState } from "react";
import "../styles.css"; // Ensure your CSS file is linked

const Education = () => {
  const [fullView, setFullView] = useState(null);

  return (
    <div id="education" className="education-container">
      {/* 🎓 Education Section */}
      <h2>🎓 Education</h2>
      <div className="edu-item">
        <h3>Bachelor of Computer Application (BCA)</h3>
        <p> SRNY College of Arts and Science | Completed: 2021</p>
      </div>

      {/* 📜 Certification Section */}
      <h2>📜 Certification</h2>
      <div className="cert-item">
        <h3>Full-Stack Development</h3>
        <p>KGISL MICRO COLLEGE, COIMBATORE | Completed: 2024</p>

        {/* Certificate Image */}
        <img
          src="/certificate.png"  // Change this to your actual image path
          alt="Full-Stack Development Certificate"
          className="certificate-img"
          onClick={() => setFullView("/certificate.png")}
        />
      </div>

      {/* Full View Overlay */}
      {fullView && (
        <div className="overlay" onClick={() => setFullView(null)}>
          <img src={fullView} alt="Full View" className="full-img" />
        </div>
      )}
    </div>
  );
};

export default Education;

