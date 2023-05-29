import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, Image, Col } from "react-bootstrap";

export default function Header() {
  const expandBreakpoint = "2500px";
  return (
    <Navbar
      bg="navBackground"
      className="bg-primary text-white p-3"
      variant="dark"
      expand={expandBreakpoint}
    >
      <Container fluid className="justify-content-between">
        <h1>Mitrasoft</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mt-1" id="basic-navbar-nav">
          <Nav
            className={`mx-auto ms-${expandBreakpoint}-auto me-${expandBreakpoint}-0`}
          >
            <Col className="ms-4" md={1}>
              <Image src="./assets/me.png" roundedCircle fluid />
            </Col>
            <p className="ps-3 pt-2">Anton Kolesnikov</p>
            <p className="ps-3">tonywk@ya.ru</p>

            <LinkContainer to="/">
              <Nav.Link className="link-white p-3">Список постов</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="link-white p-3 w-10">Обо мне</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
