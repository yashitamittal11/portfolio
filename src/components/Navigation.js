import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';  
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="md">  
    <Container>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>  
          <Nav.Link as={Link} to="/about" href="#link">About</Nav.Link>  
          <Nav.Link as={Link} to="/project" href="#link">Projects</Nav.Link>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  )
}

export default Navigation;