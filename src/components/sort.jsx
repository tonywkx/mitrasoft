import React from "react";
import { useDispatch } from "react-redux";
import { sortPostsByTitle } from "../redux/actions/actionCreater"; // Импортируем action для сортировки

import { Form } from "react-bootstrap";

function SortByTitle() {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const sortDirection = e.target.value;
    dispatch(sortPostsByTitle(sortDirection));
  };

  return (
    <Form.Group controlId="sortSelect">
      <Form.Label>Сортировка по заголовку:</Form.Label>
      <Form.Control as="select" onChange={handleSortChange}>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </Form.Control>
    </Form.Group>
  );
}

export default SortByTitle;
