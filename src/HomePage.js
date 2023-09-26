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
        <Fade delay={800}>
          <h3 className="text-white text-center">Welcome</h3>
          <h1 className="text-white text-center">
            I'm <span className="darkorange">shivam</span> kale
          </h1>
          <button
            style={{
              borderRadius: "30px",
              padding: "10px",
              width: "180px",
              border: "none",
              fontWeight: "bold",
            }}
            className="text-center colorbtn darkorange"
          >
            Web Developer
          </button>
        </Fade>
      </div>
     
        <div className="container"id="about">
         <Aboutme />
        <Skillsection />
          <Edunexpsection />
          <Services />
          <ContactMe />
        </div>
          <Footer />
    </>
  );
}
