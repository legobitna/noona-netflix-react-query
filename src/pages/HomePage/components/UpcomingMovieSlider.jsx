import React from "react";
import { responsive } from "../../../constants/responsive";
import { Alert, Spinner } from "react-bootstrap";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovies";

import MovieSlider from "../../../common/MovieSlider/MovieSlider";

const UpcomingMovieSlider = () => {
  const { data, isLoading, error, isError } = useUpcomingMoviesQuery();
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

export default UpcomingMovieSlider;
