import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchPopularMovies = () => {
  return api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
  });
};
