import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = ({ queryKey }) => {
  const keyword = queryKey[1];
  const page = queryKey[2];

  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?language=en-US&page=${page}`);
};

export const useSearchMoviesQuery = ({ keyword, page }) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["movie-search", keyword, page],
    queryFn: fetchSearchMovies,
    select: (data) => {
      return data.data;
    },
  });
};
