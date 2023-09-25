import React from "react";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavHeadBar() {
  return (
    <div>
      <div>
        {" "}
        {/* Apply margin-top to this wrapper div */}
        <Navbar
          style={{
            backgroundColor: "#555555",
            padding: "12px",
            position: "fixed",
            width: "100%",
            zIndex: "1000",
          }}
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home" style={{ color: "white" }}>
              Shivam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link
                  className="hoverLink"
                  href="#home"
                  style={{ color: "white", marginRight: "40px" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="hoverLink"
                  href="#about"
                  style={{ color: "white", marginRight: "40px" }}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="hoverLink"
                  href="#skill"
                  style={{ color: "white", marginRight: "40px" }}
                >
                  Skill
                </Nav.Link>
                <Nav.Link
                  className="hoverLink"
                  href="#service"
                  style={{ color: "white", marginRight: "40px" }}
                >
                  Service
                </Nav.Link>
                <Nav.Link
                  className="hoverLink"
                  href="#contact"
                  style={{ color: "white" }}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
