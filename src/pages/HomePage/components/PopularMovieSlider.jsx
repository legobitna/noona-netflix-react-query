import React from "react";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../common/ErrorMessage";

const PopularMovieSlider = () => {
  const { data, isLoading, error, isError } = usePopularMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title="Popular Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default PopularMovieSlider;
