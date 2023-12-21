import React from "react";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../common/ErrorMessage";
import { useRelatedMoviesQuery } from "../../../hooks/useRelatedMovies";
import { relatedMovieResponsive } from "../../../constants/responsive";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

const RelatedMovie = ({ id }) => {
  const { data, isLoading, isError,error } =
    useRelatedMoviesQuery(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title="Related Movies"
      movies={data.results}
      responsive={relatedMovieResponsive}
    />
  );
};

export default RelatedMovie;
