import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMovieReviews = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
};

export const useMovieReviewsQuery = (id) => {
  return useQuery({
    queryKey: ["movie-reviews", id],
    queryFn: fetchMovieReviews,
  });
};
