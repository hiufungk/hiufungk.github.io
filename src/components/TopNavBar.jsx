import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class TopNavBar extends Component {	

	render() {
        return(
          <Navbar fluid collapseOnSelect expand="lg" bg="primary" variant="dark">
              <Navbar.Brand href="#home">
                  React-Bootstrap
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                  <Nav>
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        );
	}
}

export default TopNavBar;

