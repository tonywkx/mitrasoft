import { Card, Button /* ListGroup */ } from "react-bootstrap";
import { useState } from "react";

const Posts = ({ posts, error }) => {
  const [showComments, setShowComments] = useState(false);

  if (!posts || posts.length === 0) {
    return error ? <h2>{error}</h2> : null;
  }

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      {posts.map(({ userId, id, title, body }) => (
        <Card key={id} className="my-4">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
          <Card.Footer className="justify-content-between d-flex">
            <Card.Img
              src="./assets/avatar.png" // Путь к изображению аватара
              alt="Аватар"
              className="avatar img-fluid"
              style={{ width: "100px", height: "100px" }}
              onClick={() => {
                // Обработка клика по аватару для перехода на страницу "Подробности о пользователе"
              }}
            />
            <Button
              variant="secondary"
              style={{ height: "40px" }}
              onClick={toggleComments}
            >
              {showComments ? "Скрыть комментарии" : "Комментарии"}
            </Button>
            {/* {showComments && (
                <ListGroup className="my-3">
                  {post.comments.map((comment) => (
                    <ListGroup.Item key={comment.id}>
                      <strong>{comment.email}</strong>: {comment.text}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )} */}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
