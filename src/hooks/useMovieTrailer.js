import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieTrailer = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/videos?language=en-US`);
};

export const useMovieTrailerQuery = (id) => {
  return useQuery({
    queryKey: ["movie-trailer", id],
    queryFn: fetchMovieTrailer,
    refetchOnMount: false,
  });
};
