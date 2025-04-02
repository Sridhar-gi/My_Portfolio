import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;