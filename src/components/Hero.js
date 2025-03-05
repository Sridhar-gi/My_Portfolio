import React from "react";
import "../styles.css";

const Hero = () => {
  return (
    <div className="hero">
        <img src={`${process.env.PUBLIC_URL}/my_profile.jpg`}  className="profile-pic" />

      <h1>Hi, I'm Sridhar 👋</h1>
      <h3>Aspiring Software Developer | JavaScript | React.js</h3>

      <p>A strong passion for building user-friendly applications and solving complex problems with clean and efficient code. I have a good understanding of JavaScript, React.js, HTML, and CSS, and I'm continuously learning and improving my skills in front-end and back-end development.</p>

      <p>I'm eager to collaborate with like-minded professionals and contribute to exciting projects. If you're looking for a dedicated and quick-learning developer, let's connect!</p>
    </div>
  );
};

export default Hero;
