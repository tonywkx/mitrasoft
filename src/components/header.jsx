import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  const expandBreakpoint = "2500px";
  return (
    <Navbar
      bg="navBackground"
      className="bg-info-subtle"
      variant="dark"
      expand={expandBreakpoint}
    >
      <Container fluid className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`mx-auto ms-${expandBreakpoint}-auto me-${expandBreakpoint}-0`}
          >
            <Nav.Link className="text-bg-primary p-3" href="/">
              Список постов
            </Nav.Link>
            <Nav.Link className="text-bg-primary p-3 w-10" href="/about">
              Обо мне
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
