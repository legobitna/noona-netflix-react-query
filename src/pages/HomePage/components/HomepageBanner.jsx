import React from "react";
import Banner from "../../../common/Banner/Banner";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import { Alert, Spinner } from "react-bootstrap";

const HomepageBanner = () => {
  const { isLoading, data, error, isError } = usePopularMoviesQuery();
  console.log("dddd", data, isLoading);
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
  return <Banner movie={data?.data.results[0]} />;
};

export default HomepageBanner;
