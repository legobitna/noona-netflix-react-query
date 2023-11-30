import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchRelatedMovies = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(
    `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`
  );
};

export const useRelatedMoviesQuery = (id) => {
  return useQuery({
    queryKey: ["movie-related", id],
    queryFn: fetchRelatedMovies,
  });
};
