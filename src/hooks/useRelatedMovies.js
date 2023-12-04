import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRelatedMovies = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/recommendations?language=en-US`);
};

export const useRelatedMoviesQuery = (id) => {
  return useQuery({
    queryKey: ["movie-related", id],
    queryFn: fetchRelatedMovies,
  });
};
