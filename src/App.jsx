import { useEffect, useRef } from "react";
import WebDeveloperMarquee from "./Components/home/Marquee";
import WhatIDo from "./Components/home/WhatIDo";
import WorkSemple from "./Components/home/WorkSemple";
import Header from "./Components/layout/header/Header";
import Home from "./pages/home/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Projects from "./Components/home/Projects";
import Ep from "./Components/home/Ep";
import About from "./Components/home/About";
import WhenReady from "./Components/home/WhenReady";
import Footer from "./Components/home/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate only once
    });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const epRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {" "}
      <div
        style={{ backgroundImage: "url(/bg.svg)" }}
        className="min-h-screen    bg-repeat border   rounded-[16px]  "
      >
        <Header
          scrollToSection={scrollToSection}
          refs={{ aboutRef, projectsRef, contactRef, epRef, homeRef }}
        />

        {/* home */}
        <div ref={homeRef}>
          <Home />
          <WebDeveloperMarquee />
        </div>

        {/* about */}
        <div ref={aboutRef}>
          <About />
          <WhatIDo />
        </div>

        {/* exprience  */}
        <div ref={epRef}>
          <Ep />
        </div>
        {/* proects */}
        <div ref={projectsRef}>
          <WorkSemple />
          <Projects />
        </div>
        {/* caontact */}
        <div ref={contactRef}>
          <WhenReady />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
