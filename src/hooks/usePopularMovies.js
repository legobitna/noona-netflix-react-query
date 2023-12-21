import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const fetchPopularMovies = () => {
  return api.get(`/movie/popular?language=en-US&page=1`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (data) => {
      return data.data;
    },
  });
};
