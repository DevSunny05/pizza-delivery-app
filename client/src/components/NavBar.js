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
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
           
            
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
