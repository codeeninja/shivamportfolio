import React from 'react'
import "./App.css";
import Fade from "react-reveal/Fade";
export default function ContactMe() {
  return (
    <div>
      <div className="container " id="contact">
          <Fade delay={500}> 
            <div className="row ">
              <div className="col text-center pb-5">
                <button
                  style={{
                    borderRadius: "30px",
                    padding: "10px",
                    width: "180px",
                    border: "none",
                    fontWeight: "bold",
                  }}
                  className="text-center servicebtn darkorange"
                >
                  Contact
                </button>
                <h1 className="mt-5">Get In Touch </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 text-center">
                <p>
                  I will be happy to receive your contact if you want to talk
                  about new opportunities. Write me, and I will reply as soon as
                  I see your message. Simple one-page design that features a
                  profile letter with basic information about a person.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <p style={{ fontSize: "25px" }}>
                  I will be happy to receive your contact if you want to talk
                  about new opportunities. Write me, and I will reply as soon as
                  I see your message. Simple one-page design that features a
                  profile letter with basic information about a person.
                </p>
              </div>
            </div>
          </Fade>
          </div>
    </div>
  )
}
