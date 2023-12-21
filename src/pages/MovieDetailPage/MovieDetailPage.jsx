import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Col, Container, Row } from "react-bootstrap";
import "./MovieDetailPage.style.css";
import Banner from "../../common/Banner/Banner";
import Reviews from "./components/Reviews";
import { numberWithCommas } from "../../utils/number";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../common/ErrorMessage";
import RelatedMovie from "./components/RelatedMovie";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
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
                <img src="/IMDB.png" width={30} className="me-1" />
                {data.data.vote_average}
              </span>
              <span>
                <img src="/people4.png" width={30} className="ms-3 me-1" />
                {data.data.popularity}
              </span>
              <span>
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
        <RelatedMovie id={id} />
        <Reviews id={id} />
      </Container>
    </>
  );
};

export default MovieDetailPage;
