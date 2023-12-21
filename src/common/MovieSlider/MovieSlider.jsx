import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.style.css";
import MovieCard from "../../common/MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3 className="fw-bold pt-5">{title}</h3>
      {movies.length > 0 ? (
        <Carousel
          responsive={responsive}
          itemClass="movie-slider p-1"
          infinite={true}
          containerClass="carousel-container"
          sliderClass="sliderClass"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Carousel>
      ) : (
        <div>0 results</div>
      )}
    </div>
  );
};

export default MovieSlider;
