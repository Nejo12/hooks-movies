import { useState, useEffect } from "react";

import { POPULAR_BASE_URL } from "../config";

export const useHomeFetch = () => {
  const [ state, setState ] = useState({ movies: [] });
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const fetchMovies = async endpoint => {
    setLoading(true);
    setError(false);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setState(res => ({
        ...res,
        movies:
          isLoadMore !== -1
            ? [ ...res.movies, ...result.results ]
            : [ ...result.results ],
        homeImage: res.homeImage || result.results[ 0 ],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies(POPULAR_BASE_URL);
  }, []);

  return [ { state, loading, error }, fetchMovies ];
};
