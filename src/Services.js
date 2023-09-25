import React from 'react'
import "./App.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
export default function Services() {
  return (
    <div>
      <Fade delay={500}>
          <div className="container" id="service">
            <div className="row">
              <div className="col text-center mt-5 pb-5">
                <button
                  style={{
                    borderRadius: "30px",
                    padding: "10px",
                    width: "180px",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "15px",
                    marginTop: "6%",
                    marginBottom: "1%",
                  }}
                  className="text-center servicebtn darkorange "
                >
                  service
                </button>
                <h1 style={{ fontWeight: "350", marginBottom: "4%" }}>
                  What can i do ?
                </h1>
              </div>
            </div>
            <div
              className="row text-center pb-5"
              style={{ marginBottom: "10%" }}
            >
              <div className="col-md-3 ">
              <FontAwesomeIcon icon={faPaintRoller} size="3x" className="mb-5" /> 
                <h1 className="orangeColorHeading">Web Design</h1>
                <p>
                  Web design is the process of creating the visual and
                  functional layout of a website
                </p>
              </div>
              <div className="col-md-3 ">
              <FontAwesomeIcon icon={faPencilAlt} size="3x" className="mb-5" /> 
                <h1 className="orangeColorHeading">UI/UX Design</h1>
                <p>
                  UI/UX Design focuses on creating engaging and intuitive
                  experiences for users interacting with digital products.
                </p>
              </div>
              <div className="col-md-3">
              <FontAwesomeIcon icon={faCode} size="3x" className="mb-5" />
                <h1 className="orangeColorHeading">Web Development</h1>
                <p>
                  Creating functional and interactive websites using programming
                  languages and frameworks
                </p>
              </div>
              <div className="col-md-3 ">
              <FontAwesomeIcon icon={faDatabase} size="3x" className="mb-5" />
                <h1 className="orangeColorHeading">SQL</h1>
                <p>
                  SQL is a powerful language used for storing, manipulating and
                  retrieving data in relational databases, and is widely used in
                  businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
          </Fade>
    </div>
  )
}
