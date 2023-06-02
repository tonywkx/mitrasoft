import React from "react";
import Header from "../components/header";
import { useSelector } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import Posts from "../components/posts";
import SortByTitle from "../components/sort";

export default function Home() {
  const { latestPosts } = useSelector((store) => store?.posts || {});
  const { latestPostsError } = useSelector((store) => store?.errors || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});

  return (
    <>
      <Header />
      <Container fluid>
        <h1>Список постов</h1>

        {/* Здесь можно добавить код для поиска по заголовку поста и очистки поля через крестик */}

        <SortByTitle />

        {isDataLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Posts posts={latestPosts} error={latestPostsError} />
        )}

        {/* Пагинация */}
      </Container>
    </>
  );
}
