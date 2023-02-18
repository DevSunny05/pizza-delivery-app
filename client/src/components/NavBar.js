import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkContainer from 'react-router-bootstrap/LinkContainer'
// import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">Pizza Shop</Navbar.Brand>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
                <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact" activeClassName>
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/policy" activeClassName>
                <Nav.Link>Policy</Nav.Link>
            </LinkContainer>
           
            
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
