import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

class TopNavBar extends Component {	

	render() {
        return(
          <Navbar fluid collapseOnSelect expand="lg" bg="primary" variant="dark">
              <Navbar.Brand href="/">
                  Kevin Chang
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                  <Nav className="mr-auto">
                      <NavLink className="nav-link" to="/home">Home</NavLink>
                      <NavLink className="nav-link" to="/projects">Projects</NavLink>
                      <NavLink className="nav-link" to="/about-me">About Me</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        );
	}
}

export default TopNavBar;

