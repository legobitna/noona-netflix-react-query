import React, { useEffect,useState } from "react";
import Banner from "./components/Banner/Banner";
import "./Homepage.style.css";
import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";
import { useTopRatedMoviesQuery } from "../../hooks/useTopRatedMovies";
import { useUpcomingMoviesQuery } from "../../hooks/useUpcomingMovies";
import MovieSlider from "./components/MovieSlider/MovieSlider";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
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

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []); 
  
  const {
    data: popularMovies,
    isLoading: isLoadingApi1,
    error: errorApi1,
  } = usePopularMoviesQuery();
  const {
    data: topRatedMovies,
    isLoading: isLoadingApi2,
    error: errorApi2,
  } = useTopRatedMoviesQuery();
  const {
    data: upcomingMovies,
    isLoading: isLoadingApi3,
    error: errorApi3,
  } = useUpcomingMoviesQuery();

  const isLoading = isLoadingApi1 || isLoadingApi2 || isLoadingApi3;
  const hasError = errorApi1 || errorApi2 || errorApi3;
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
  if (hasError) {
    return (
      <Alert key="danger" variant="danger">
        Error occurred while fetching data.
      </Alert>
    );
  }
  return (
    <div>
      <Banner movie={popularMovies?.data.results[0]} />
      <div className={isMobile?'px-3':'px-5'}>
        <MovieSlider
          title="Popular Movies"
          movies={popularMovies.data.results}
          responsive={responsive}
        
        />
        <MovieSlider
          title="Top rated Movies"
          movies={topRatedMovies.data.results}
          responsive={responsive}
          
        />
        <MovieSlider
          title="Upcoming Movies"
          movies={upcomingMovies.data.results}
          responsive={responsive}
         
        />
      </div>
    </div>
  );
};

export default HomePage;
