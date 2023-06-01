import React from "react";
import { Container, Button, Card, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import Posts from "../components/posts";

export default function Details() {
  const { user } = useSelector((store) => store?.user || {});
  const { userPosts } = useSelector((store) => store?.user || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});
  const { latestPostsError } = useSelector((store) => store?.errors || {});

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <LinkContainer to="/" className="mt-2 mb-3">
        <Button variant="primary">Назад к постам</Button>
      </LinkContainer>
      {user.length > 0 ? (
        <Card className="d-flex flex-column align-items-center bg-info">
          <Card.Body>
            <Card.Title>{user[1].name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email:{user[1].email}
            </Card.Subtitle>
            <Card.Text>
              Company: <strong>{user[1].company.name}</strong>
            </Card.Text>
            <Card.Text>
              City: <strong>{user[1].address.city}</strong>
            </Card.Text>
            <Card.Text>
              Website: <strong>{user[1].website}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <hr style={{ borderTop: "1px solid #ccc" }} />
      {isDataLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Posts posts={userPosts} error={latestPostsError} />
      )}
    </Container>
  );
}
