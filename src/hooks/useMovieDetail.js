import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMovieDetail = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: fetchMovieDetail,
  });
};
