import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";

const SortBy = ({ sort, setSort, genre, setGenre }) => {
  const { data: genreData } = useMovieGenreQuery();
  return (
    <div className="d-flex my-4">
      <Dropdown className="me-3">
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          {sort === ""
            ? "정렬기준"
            : sort === "desc"
            ? "인기 많은순"
            : "인기 적은순"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSort("desc")}>
            인기 많은순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("asc")}>
            인기 적은순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          {genre ? genre.name : "장르별 검색"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {genreData?.map((item, index) => (
            <Dropdown.Item onClick={() => setGenre(item)} key={index}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortBy;
