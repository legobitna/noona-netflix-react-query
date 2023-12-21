import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming?language=en-US&page=1`);
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpComingMovies,
    select: (data) => {
      return data.data;
    },
  });
};
