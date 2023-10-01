import React from 'react'
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div>
        <div className="container" style={{ width: "100%", maxWidth: "100%" }}>
        <div className="row">
          <section
            id="footer"
            style={{ paddingRight: "0PX", paddingLeft: "0" }}
          >
            <div className="main-footer">
              <div className="logoinfo" data-aos="fade-up">
                <div className="contact-details">
                  <h1>Contact Us</h1>
                  <ul>
                    <li>
                      <div className="fa fa-phone"></div>
                      <a href="tel:+919326048690">+91 9373511250</a>
                    </li>
                    <li>
                      <div className="fa fa-envelope"></div>
                      <a href="mailto:yourmail@gmail.com">shivamkale1123@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="com" data-aos="fade-up">
                <h1>About</h1>
                <ul className="text-white">
                  <li>
                    <p id="home">Home</p>
                  </li>
                  <li>
                    <p id="about">About</p>
                  </li>
                  <li>
                    <p id="skill">Projects</p>
                  </li>
                  <li>
                    <p id="service">Contact</p>
                  </li>
                </ul>
              </div>
              <div className="info" data-aos="fade-up">
                <h1>Social Media</h1>
                <div className="sociallogos">
                  <div className="logobox">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="xl"
                      style={{
                        padding: "10px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="xl"
                      style={{
                        padding: "10px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="xl"
                      style={{
                        padding: "10px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer>© ShivamPortfolio 2023 All Rights Reserved</footer>
          </section>
        </div>
      </div>
    </div>
  )
}
