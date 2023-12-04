import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/reviews?language=en-US`);
};

export const useMovieReviewsQuery = (id) => {
  return useQuery({
    queryKey: ["movie-reviews", id],
    queryFn: fetchMovieReviews,
  });
};
