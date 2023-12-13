import React from "react";
import { useTopRatedMoviesQuery } from "../../../hooks/useTopRatedMovies";
import { responsive } from "../../../constants/responsive";
import { Alert, Spinner } from "react-bootstrap";
import MovieSlider from "./MovieSlider/MovieSlider";

const TopRatedMovieSlider = () => {
  const { data, isLoading, error,isError } = useTopRatedMoviesQuery();
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
    return (
      <Alert key="danger" variant="danger">
        {error.message}
      </Alert>
    );
  }
  return (
    <MovieSlider
      title="Top rated Movies"
      movies={data.data.results}
      responsive={responsive}
    />
  );
};

export default TopRatedMovieSlider;
