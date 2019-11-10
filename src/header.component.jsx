import React from 'react';

import { Navbar, Nav, NavDropdown, Button, FormControl } from 'react-bootstrap';

// import 'antd';


import 'bootstrap/dist/css/bootstrap.min.css';
import './header.styles.scss';

// import { Icon } from 'antd';

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Transport<span className="text-warning">Me</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="link">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link eventKey={2} href="#contact">
            Contact
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};
