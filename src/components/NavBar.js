import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/icons8-github-50.png"
import Sasuke from "../assets/img/port-photo.jpg"

import React, { useEffect, useState } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="sasuke" src={Sasuke} alt="me" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight: 25}} >
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/anthonyw1213/">
                <img src={navIcon3} alt="instagram account" />
              </a>
            </div>
          </span>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/Anthony-eng21">
                <img src={github} alt="github account" />
              </a>
            </div>
          </span>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};
