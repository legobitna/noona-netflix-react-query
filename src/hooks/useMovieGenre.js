import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (data) => {
      return data.data.genres;
    },
    staleTime: 300000, // 5분 (ms 단위)
  });
};
