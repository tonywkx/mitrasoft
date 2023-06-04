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
    <Form.Group
      controlId="sortSelect"
      className="bg-info w-50 d-flex flex-column align-items-center p-2 mt-2 rounded custom-sort"
    >
      <Form.Label>Сортировка по заголовку:</Form.Label>
      <Form.Control
        as="select"
        className="bg-light w-75"
        onChange={handleSortChange}
      >
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </Form.Control>
    </Form.Group>
  );
}

export default SortByTitle;
