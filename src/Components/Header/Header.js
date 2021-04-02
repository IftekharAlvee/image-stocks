import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
        <Navbar bg="light" variant="light">
        <Navbar.Brand><NavLink to="/home">Image Stock</NavLink></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link > <NavLink to="/home">Home</NavLink> </Nav.Link>
          <Nav.Link > <NavLink to="/order">Order</NavLink> </Nav.Link>
          <Nav.Link  > <NavLink to="/admin">Admin</NavLink> </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
