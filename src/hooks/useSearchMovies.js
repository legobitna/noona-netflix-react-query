import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = ({ keyword, page }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?language=en-US&page=${page}`);
};

export const useSearchMoviesQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", page],
    queryFn: () => fetchSearchMovies({ keyword, page }),
    select: (data) => {
      return data.data;
    },
  });
};
