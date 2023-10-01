import React from "react";

export default function Project() {
  return (
    <div className="container" id="project">
      <div className="row">
        <div className="col text-center mt-4 mb-3">
          <button
            style={{
              borderRadius: "30px",
              padding: "10px",
              width: "180px",
              border: "none",
              fontWeight: "bold",
              fontSize: "15px",
              marginBottom: "1%",
            }}
            className="text-center servicebtn darkorange "
          >
            Project
          </button>
        </div>
      </div>
      <div className="row text-center mt-2">
        <div className="col-sm-4 mb-3">
          <div class="card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Gym Management System</h5>
              <h6 class="card-subtitle mb-2">
                Tech Stack:-React.js,Node.js,Express.js,SQL
              </h6>
              <p class="card-text">
                This system is use To manage Daily Transection of Gym And use To
                keep Record of Client
              </p>
              <a
                className="btn btn-outline-success"
                href="https://gym-management-e0acb.web.app/"
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div class="card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">ISYNC ERP APK</h5>
              <h6 class="card-subtitle mb-2">
                Tech Stack:-React.js,Material UI,PHP
              </h6>
              <p class="card-text">
                This system is use To manage Daily Transection of Gym And use To
                keep Record of Client
              </p>
              <a
                className="btn btn-outline-success"
                href="https://drive.google.com/u/0/uc?id=1cZxtf8PbHESfLWQDRdXsYJRFz9q74cI5&export=download"
                target="_blank "
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
        <div class="card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Fliqa India Landing Page</h5>
              <h6 class="card-subtitle mb-2">
                Tech Stack:-React.js,Bootstrap,CSS,Material UI
              </h6>
              <p class="card-text">
                Created an single Page landing Page For Fliqa India
              </p>
              <a
                className="btn btn-outline-success"
                href="https://codeeninja.github.io/FliqaIndia-landing-page/" 
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                  Go to Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
