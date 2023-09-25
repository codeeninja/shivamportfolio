import React from 'react'
import "./App.css";
import Fade from "react-reveal/Fade";
export default function Aboutme() {
  return (
    <div className='container'>
       <div className="row">
            <div className="col-md-12" >
              <h1 className="text-center mt-5">About me</h1>
            </div>
          </div>
          <div className="row">
            <Fade delay={500}>
            <div className="col">
              <h4
                style={{
                  fontSize: "18px",
                  lineHeight: "2",
                  margin: "20px 0",
                  textAlign: "center",
                }}
              >
                I am a skilled web developer with expertise in front-end and
                back-end technologies. I have experience in developing
                responsive and user-friendly websites using HTML, CSS,
                JavaScript, and other modern web technologies. I am passionate
                about coding and love to take on challenging projects. I am a
                quick learner and always eager to learn new things to improve my
                skills and knowledge. I am dedicated to delivering high-quality
                work and exceeding clients' expectations
              </h4>
              <div className="col">
                <ul class="theme-list">
                  <li>
                    <b>From:</b> Maharastra, India
                  </li>
                  <li>
                    <b>Lives In:</b> Maharastra, India
                  </li>
                  <li>
                    <b>Age:</b> 21
                  </li>
                  <li>
                    <b>Gender:</b> Male
                  </li>
                </ul>
              </div>
              <a href="public/ShivamRKaleResume.pdf" download>
                <button className="btn btn-outline-warning">Download</button>
              </a>
            </div>
            </Fade>
          </div>
    </div>
  )
}
