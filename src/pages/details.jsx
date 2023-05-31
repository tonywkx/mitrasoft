import React from "react";
import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Details() {
  return (
    <Container>
      <LinkContainer to="/">
        <Button variant="primary">Назад к постам</Button>
      </LinkContainer>
    </Container>
  );
}
