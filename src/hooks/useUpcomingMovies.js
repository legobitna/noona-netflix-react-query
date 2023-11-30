import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;
const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpComingMovies,
  });
};
