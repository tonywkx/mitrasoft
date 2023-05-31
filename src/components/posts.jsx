import { Card, Button, ListGroup, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions/actionCreater";

const Posts = ({ posts, error }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();

  const { comments } = useSelector((store) => store?.comments || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});

  if (!posts || posts.length === 0) {
    return error ? <h2>{error}</h2> : null;
  }

  const toggleComments = () => {
    setShowComments(!showComments);
    dispatch(getComments());
  };

  return (
    <div>
      {posts.map(({ userId, id, title, body }) => (
        <Card key={id} className="my-4">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
          <Card.Footer className="justify-content-between d-flex flex-column align-items-center">
            <Card.Img
              src="./assets/avatar.png"
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
            {showComments && isDataLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              showComments &&
              comments[id] && (
                <ListGroup className="my-3">
                  {comments[id].map((comment) => (
                    <ListGroup.Item key={comment.id}>
                      <strong>{comment.email}</strong>: {comment.body}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )
            )}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
