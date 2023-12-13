import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const fetchPopularMovies = () => {
  return api.get(`/movie/popular?language=en-US&page=1`);
};

export const usePopularMoviesQuery = (options = {}) => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    ...options,
  });
};
