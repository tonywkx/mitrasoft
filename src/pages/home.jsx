import React from "react";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { Container, Spinner, Pagination } from "react-bootstrap";
import Posts from "../components/posts";
import SortByTitle from "../components/sort";
import SearchByTitle from "../components/search";
import { setPage } from "../redux/actions/actionCreater";

export default function Home() {
  const { latestPosts } = useSelector((store) => store?.posts || {});
  const { latestPostsError } = useSelector((store) => store?.errors || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});
  const { savedPosts } = useSelector((store) => store?.posts || {});

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posts.currentPage);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const totalPages = 9;

  return (
    <>
      <Header />
      <Container fluid className="d-flex flex-column align-items-center">
        <h1>Список постов</h1>

        <SearchByTitle />

        <SortByTitle />

        {isDataLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Posts
            posts={latestPosts}
            savedPosts={savedPosts}
            error={latestPostsError}
          />
        )}

        {currentPage && (
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            <Pagination.Item
              active={currentPage === 1}
              onClick={() => handlePageChange(1)}
            >
              1
            </Pagination.Item>
            {/*  <Pagination.Ellipsis disabled /> */}

            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 2}
                active={currentPage === index + 2}
                onClick={() => handlePageChange(index + 2)}
              >
                {index + 2}
              </Pagination.Item>
            ))}

            {/* <Pagination.Ellipsis disabled />
            <Pagination.Item
              active={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </Pagination.Item> */}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}
      </Container>
    </>
  );
}
