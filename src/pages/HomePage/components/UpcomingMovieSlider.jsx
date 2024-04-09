import React from "react";
import { responsive } from "../../../constants/responsive";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovies";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../common/ErrorMessage";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

const UpcomingMovieSlider = () => {
  const { data, isLoading, error, isError } = useUpcomingMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title="Upcoming Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default UpcomingMovieSlider;
