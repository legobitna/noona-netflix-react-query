import React from 'react'
import MovieSlider from "./MovieSlider/MovieSlider";
import Spinner from "react-bootstrap/Spinner";
import { Alert } from 'react-bootstrap';
import { responsive } from '../../../constants/responsive';
import { usePopularMoviesQuery } from '../../../hooks/usePopularMovies';

const PopularMovieSlider = () => {
  const {
    data,
    isLoading,
    error,
    isError
  } = usePopularMoviesQuery();
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
          title="Popular Movies"
          movies={data.data.results}
          responsive={responsive}
        
        />
  )
}

export default PopularMovieSlider