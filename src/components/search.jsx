import React from "react";
import { useDispatch } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";
import { setSearch, clearSearch } from "../redux/actions/actionCreater";

function SearchByTitle() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearch(searchTerm));
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <Form className="d-flex w-50 border-2">
      <InputGroup className="">
        <Form.Control
          type="search"
          placeholder="Search by title..."
          className="me-0"
          aria-label="Search"
          onChange={handleChange}
          onClick={handleClear}
        />
        {/* <Button variant="outline-danger" onClick={handleClear}>
          &times;
        </Button> */}
      </InputGroup>
    </Form>
  );
}

export default SearchByTitle;
