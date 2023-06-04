import { Card, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getUserId,
  getUserPosts,
} from "../redux/actions/actionCreater";
import { LinkContainer } from "react-router-bootstrap";

const Posts = ({ posts, error, savedPosts }) => {
  const [showComments, setShowComments] = useState(false);
  const [openId, setOpenId] = useState(null);
  const dispatch = useDispatch();
  const { comments } = useSelector((store) => store?.comments || {});

  if (!posts || posts.length === 0) {
    return error ? <h2>{error}</h2> : null;
  }

  const toggleComments = (id) => {
    setOpenId(id);
    setShowComments(!showComments);
    dispatch(getComments(id));
  };

  const handleGetUser = (userId) => {
    dispatch(getUserId(userId));
    dispatch(getUserPosts(userId));
  };

  return (
    <div className="d-flex flex-wrap ">
      {posts.map(({ userId, id, title, body }) => {
        return (
          <Card key={id} className="my-4 w-50 mr-2">
            <Card.Body>
              <Card.Title className="bg-success rounded text-light">
                {title}
              </Card.Title>
              <Card.Text>{body}</Card.Text>
            </Card.Body>
            <Card.Footer className="justify-content-between d-flex flex-column align-items-center">
              <LinkContainer
                style={{ width: "100px", height: "100px" }}
                to="/details"
                onClick={() => handleGetUser(userId)}
              >
                <Card.Img
                  src="./assets/avatar.png"
                  alt="Аватар"
                  className="avatar img-fluid"
                  style={{ width: "100px", height: "100px" }}
                />
              </LinkContainer>

              <Button
                variant="secondary"
                style={{ height: "40px" }}
                onClick={() => toggleComments(id)}
              >
                {showComments ? "Скрыть комментарии" : "Комментарии"}
              </Button>
              {id === openId && (
                <ListGroup className="my-3">
                  {comments &&
                    comments.map((comment) => (
                      <ListGroup.Item key={comment.id}>
                        <strong>{comment.email}</strong>: {comment.body}
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              )}
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;
