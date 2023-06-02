import React from "react";
import { Container, Button, Card, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import Posts from "../components/posts";

export default function Details() {
  let { user } = useSelector((store) => store?.user || {});
  const { userPosts } = useSelector((store) => store?.user || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});
  const { latestPostsError } = useSelector((store) => store?.errors || {});

  if (user.length > 0) {
    return (
      <Container fluid className="d-flex flex-column align-items-center">
        <LinkContainer to="/" className="mt-2 mb-3">
          <Button variant="primary" onClick={() => localStorage.clear()}>
            Назад к постам
          </Button>
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
        <hr style={{ borderTop: "3px solid #ccc" }} />
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

  if (localStorage.length > 0) {
    let dataFromStorage;
    let postsFromStorage;

    const dataUserString = localStorage.getItem("user");
    dataFromStorage = JSON.parse(dataUserString);
    console.log(dataFromStorage);
    const dataPostsString = localStorage.getItem("userPosts");
    postsFromStorage = JSON.parse(dataPostsString);
    console.log(postsFromStorage);

    return (
      <Container fluid className="d-flex flex-column align-items-center">
        <LinkContainer to="/" className="mt-2 mb-3">
          <Button variant="primary">Назад к постам</Button>
        </LinkContainer>
        {
          <Card className="d-flex flex-column align-items-center bg-info">
            <Card.Body>
              <Card.Title>{dataFromStorage[1].name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Email:{dataFromStorage[1].email}
              </Card.Subtitle>
              <Card.Text>
                Company: <strong>{dataFromStorage[1].company.name}</strong>
              </Card.Text>
              <Card.Text>
                City: <strong>{dataFromStorage[1].address.city}</strong>
              </Card.Text>
              <Card.Text>
                Website: <strong>{dataFromStorage[1].website}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        }
        <hr style={{ borderTop: "3px solid #ccc" }} />
        {isDataLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Posts posts={postsFromStorage} error={latestPostsError} />
        )}
      </Container>
    );
  }
}
