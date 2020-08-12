import React from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'

class Bar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="https://jc-hf-d60cf.web.app">JCHF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://github.com/joseherrera7">Github</Nav.Link>
            <NavDropdown title="Social" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.facebook.com/xjoseherrera">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/joseherrera7_">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/jos%C3%A9-herrera-a28ab7197/">LinkedIn</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Bar;