import React from "react";
import { useMovieReviewsQuery } from "../../../hooks/useMovieReviews";
import { Alert, Spinner } from "react-bootstrap";
import ReviewBox from "./ReviewBox/ReviewBox";

const Reviews = ({ id }) => {

  const { data, isLoading, isFetching, isError, error } =
    useMovieReviewsQuery(id);
  if (isLoading || isFetching) {
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
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <h3 className="fw-bold">Reviews</h3>

      {data.data.results.length === 0 ? (
        <div className="mb-5">0 reviews for this movie</div>
      ) : (
        data.data.results.map((review, index) => (
          <ReviewBox review={review} key={index}/>
        ))
      )}
    </div>
  );
};

export default Reviews;
