import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}?language=en-US`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: fetchMovieDetail,
  });
};
