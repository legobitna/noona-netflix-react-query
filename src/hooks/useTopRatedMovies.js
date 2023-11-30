import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;
const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-topRated"],
    queryFn: fetchTopRatedMovies,
  });
};
