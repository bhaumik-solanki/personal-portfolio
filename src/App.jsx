import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      {/* <Experience /> */}
      <Education />
      {/* <Achievements /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
