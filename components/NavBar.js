import Link from "next/Link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/product">Product</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
