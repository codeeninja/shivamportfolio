import React from "react";
import NavHeadBar from "./NavHeadBar";
import "./App.css";
import Fade from "react-reveal/Fade";
import Aboutme from "./Aboutme";
import Skillsection from "./Skillsection";
import Edunexpsection from "./Edunexpsection";
import Services from "./Services";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Project from "./Project";

export default function HomePage() {
  return (
    <>
      <NavHeadBar />
      <div
        className="backgroundImg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="home"
      >
        <Fade delay={600}>
          <h3 className="text-white text-center">Welcome</h3>
          </Fade>
          <Fade delay={800}>
          <h1 className="text-white text-center">
            I'm <span className="darkorange">shivam</span> kale
          </h1>
          </Fade>
          <Fade delay={900}>
          <h4 className="text-white mt-3">Web Developer 💻, I’m currently exploring new</h4>
          </Fade>
          <Fade delay={1000}>
          <h4 className="text-white"> opportunities 🔍 and am available to start immediately ⏰.</h4>
          </Fade>
          <Fade delay={1100}>
          <button
            style={{
              borderRadius: "30px",
              padding: "10px",
              width: "180px",
              border: "none",
              fontWeight: "bold",
            }}
            className="text-center colorbtn darkorange mt-3"
          >
            Web Developer
          </button>
          </Fade>
      </div>
     
        <div className="container"id="about">
         <Aboutme />
        <Skillsection />
          <Edunexpsection />
        <Project />
          <Services />
          <ContactMe />
        </div>
          <Footer />
    </>
  );
}
