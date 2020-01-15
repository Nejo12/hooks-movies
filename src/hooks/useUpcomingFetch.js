import { useState, useEffect } from "react";

import { UPCOMING_BASE_URL } from "../config";

export const useUpcomingFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUpcoming = async endpoint => {
    setLoading(true);
    setError(false);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();

      setState(res => ({
        ...res,
        movies:
          isLoadMore !== -1
            ? [...res.movies, ...result.results]
            : [...result.results],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      setError(true);
      console.log("err fetching upcoming:", error.message);
    }
  };

  useEffect(() => {
    fetchUpcoming(UPCOMING_BASE_URL);
  }, []);

  return [{ state, loading, error }, fetchUpcoming];
};
