import React from 'react'
import "./App.css";
import Fade from "react-reveal/Fade";
export default function Edunexpsection() {
  return (
    <div>
      <Fade delay={500}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="card-title fw-normal  mb-4">Education</h2>
              <div
                className="card  mb-4"
                style={{
                  backgroundColor: "#F1EFEF",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <ul className="timeline mt-4 pr-md-5">
                    <li>
                      <div className="title">2017</div>
                      <div className="details">
                        <h5>SSC</h5>
                        <small className="fg-theme">
                          Shree Convent And High School
                        </small>
                        <p>Percentage: 87%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card  mb-4"
                style={{
                  backgroundColor: "#F1EFEF",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <ul className="timeline mt-4 pr-md-5">
                    <li>
                      <div className="title">2019</div>
                      <div className="details">
                        <h5>HSC</h5>
                        <small className="fg-theme">Shree Ram college</small>
                        <p>Percentage: 57%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card  mb-4"
                style={{
                  backgroundColor: "#F1EFEF",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <ul className="timeline mt-4 pr-md-5">
                    <li>
                      <div className="title">2023</div>
                      <div className="details">
                        <h5>Btech</h5>
                        <small className="fg-theme">
                          JD College of Enginerring and management
                        </small>
                        <p>Percentage: 7.96</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="card-title fw-normal mb-4">Experience</h2>
              <div
                className="card"
                style={{
                  backgroundColor: "#F1EFEF",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <ul className="timeline mt-1 pr-md-5">
                    <li>
                      <div className="title">2023 - 2023</div>
                      <div className="details">
                        <h5>JR.Web Developer</h5>
                        <small className="fg-theme">Amika Software</small>
                        <p>
                          As a developer in my company, I am responsible for
                          designing, developing, and maintaining high-quality
                          software solutions that meet the needs of our
                          clients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <ul className="timeline">
                    <li>
                      <div className="title">2023 - 2024</div>
                      <div className="details">
                        <h5>Node Js Developer</h5>
                        <small className="fg-theme">Amika Software</small>
                        <p>
                          Worked alongside experienced developers and contribute to the development of
                          dynamic web Apis .
                          • Opportunity to gain hands-on experience with Node.js, JavaScript, jQuery,
                          Sequalize, MySQL.

                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <ul className="timeline pr-md-2">
                    <li>
                      <div className="title">2024 - Present</div>
                      <div className="details">
                        <h5>Software Developer</h5>
                        <small className="fg-theme">MasterSoft ERP Solution</small>
                        <p>
                          Develop and maintain front-end components using ASP.NET,MVC.
                          Perform bug fixes, debugging and troubleshoot issues in the company's software applications.
                          Contribute significantly to a high-impact project ensuring the company's product adheres to
                          accessibility standards.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
