import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMoviesQuery } from "../../hooks/useSearchMovies";
import Spinner from "react-bootstrap/Spinner";
import { Alert, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";
import ReactPaginate from "react-paginate";

const MoviePage = () => {
  const [isAsc, setAsc] = useState(false);
  const [query, setQuery] = useSearchParams();

  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  // const {
  //   isLoading: isPopularMovieLoading,
  //   isError: isPopularmovieError,
  //   error: popularMovieError,
  //   data: popularMovieData,
  // } = usePopularMoviesQuery({  // 쿼리 b
  //   enabled: !!keyword, // 키워드가 없다면 실행
  //   select: (data) => data.data,
  // });

  const {
    isLoading,
    isError,
    error,
    data: searchData,
  } = useSearchMoviesQuery({
    // 쿼리 a
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const sortMovie = () => {
    if (isAsc) {
      const sortedData = data.results.sort(
        (a, b) => a.vote_average - b.vote_average
      );
      setData({ ...data, results: sortedData });
      setAsc(!isAsc);
      return;
    }
    const sortedData = data.results.sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setData({ ...data, results: sortedData });
    setAsc(!isAsc);
  };

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <button onClick={sortMovie}>sort By</button>
        </Col>
        <Col lg={8} xs={12}>
          {data?.results.length === 0 ? (
            <div>{keyword} 와 일치하는 영화가 없습니다.</div>
          ) : (
            <Row>
              {data?.results.map((movie, index) => (
                <Col lg={3} xs={12} key={index}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          )}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            t
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
//year은 제공해줌
// sortby 는 안됨
