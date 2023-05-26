import React from "react";
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

            <Nav.Link className="link-white p-3" href="/">
              Список постов
            </Nav.Link>
            <Nav.Link className="link-white p-3 w-10" href="/about">
              Обо мне
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
