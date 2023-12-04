import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = (queryData) => {
  const keyword = queryData.queryKey[1];
  return api.get(`/search/movie?query=${keyword}&page=1`);
};

export const useSearchMoviesQuery = (keyword) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: fetchSearchMovies,
  });
};
