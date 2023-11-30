import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import "./MovieDetailPage.style.css";
import Banner from "../HomePage/components/Banner/Banner";
import MovieSlider from "../HomePage/components/MovieSlider/MovieSlider";
import { useRelatedMoviesQuery } from "../../hooks/useRelatedMovies";
import Reviews from "./components/Reviews";
import { numberWithCommas } from "../../utils/number";

const relatedMovieResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isError, error } =
    useMovieDetailQuery(id);
  const { data: relatedMovies, isLoading: isRelatedMovieLoading } =
    useRelatedMoviesQuery(id);

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
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <>
      <Banner movie={data?.data} />
      <Container className="pb-5">
        <Row>
          <Col xs={12} lg={6} className="d-flex justify-content-center mt-5">
            <img
              className="w-80"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.data.poster_path}`}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-5">
            <div className="d-flex mb-4">
              {data?.data.genres.map((genre, index) => (
                <div className="movie-badge me-2" key={index}>
                  {genre.name}
                </div>
              ))}
            </div>
            <h1 className="movie-title">{data.data.title}</h1>
            <h3>{data.data.tagline}</h3>
            <div className="py-4 movie-number  border-bottom border-white">
              <span>
                {" "}
                <img src="/IMDB.png" width={30} className="me-1" />
                {data.data.vote_average}
              </span>
              <span>
                <img src="/people4.png" width={30} className="ms-3 me-1" />
                {data.data.popularity}
              </span>
              <span>
                {" "}
                {data.data.adult ? (
                  <img src={"/over18.svg"} width={30} className="ms-2" />
                ) : (
                  <img src={"/under18.svg"} width={30} className="ms-2" />
                )}
              </span>
            </div>
            <div className="py-4 border-bottom border-white">
              {data.data.overview}
            </div>
            <div className="py-4">
              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Budget</div>
                <div>$ {numberWithCommas(data.data.budget)}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Revenue</div>
                <div>$ {numberWithCommas(data.data.revenue)}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Release Date</div>
                <div>{data.data.release_date}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Run time</div>
                <div>{data.data.runtime}분</div>
              </div>
            </div>
          </Col>
        </Row>
        {isRelatedMovieLoading ? (
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <MovieSlider
            title="Related Movies"
            movies={relatedMovies?.data.results}
            responsive={relatedMovieResponsive}
          />
        )}
        <Reviews id={id}/>
      </Container>
    </>
  );
};

export default MovieDetailPage;
