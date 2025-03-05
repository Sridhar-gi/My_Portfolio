import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

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
