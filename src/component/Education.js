import React, { useState } from "react";
import "../style.css"; 
// import Education from "./component/Education";


const Education = () => {
  const [fullView, setFullView] = useState(null);

  return (
    <div id="education" className="education-container">
      {/* 🎓 Education Section */}
      <h2>🎓 Education</h2>
      <div className="edu-item">
        <h3>Bachelor of Computer Application (BCA) - 8.06 CGPA</h3>
        <p> Sri Ram Nallamani Yadava College of Arts and Science,Tenkasi | Completed: 2021</p>
      </div>

      <div className="edu-item">
        <h3>Higher Secondary(12th) - 80.75%</h3>
        <p>Ashram Matriculation Higher Secondary School, Coimbatore | Completed: 2018</p>
      </div>

      {/* 📜 Certification Section */}
      <h2>📜 Certification</h2>
      <div className="cert-item">
        <h3>Full-Stack Developer Course</h3>
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
