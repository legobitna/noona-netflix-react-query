import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
  };
  return (
    <div>
      <Navbar expand="lg" className="px-5 bg-black" data-bs-theme="dark">
        <Link to={"/"}>
          <Navbar.Brand className="me-4">
            <img src="/netflixLogoSvg.svg" width={93} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="text-white me-4 link-offset-2 link-underline link-underline-opacity-0"
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="text-white link-offset-2 link-underline link-underline-opacity-0"
            >
              Movies
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button variant="outline-danger" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
