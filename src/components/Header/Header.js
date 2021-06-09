import React from "react";
import "./Header.css";
import { Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="nav-bar">
      <Button className="navbar-button rounded-pill border-0 ms-auto">
        Login
      </Button>
      <Nav className="mr-auto">
        <Nav.Link href="#home" className="text-white">
          Sign Up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
