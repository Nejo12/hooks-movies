import { useState, useEffect } from "react";

import { API_URL, API_KEY } from "../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setLoading(true);
    setError(false);

    try {
      const result = await (await fetch(endpoint)).json();

      setState(res => ({
        ...res,
        movies: [...result.results],
        homeImage: res.homeImage || result.results[0],
        currentPage: result.page,
        totalPage: result.total_pages
      }));
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
