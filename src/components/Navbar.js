import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export default function NavComp() {
  return (
    <Router>
      <div>
        <Navbar expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Service 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Service 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Service 3
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
