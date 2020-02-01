import { useState, useEffect } from "react";

import { POPULAR_BASE_URL } from "../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setLoading(true);
    setError(false);

    const isLoadMore = endpoint.search("page"); // searches for the string 'page' in path. When found, then it'll depicts a loadMore, else returns -1.

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      // const selectedMovies = result.results.slice(0, 5);
      // const carouselImages = selectedMovies.map(el => el.backdrop_path);
      // console.log("carouselImages:", carouselImages);

      setState(res => ({
        ...res,
        movies:
          isLoadMore !== -1
            ? [...res.movies, ...result.results]
            : [...result.results],
        // carouselImages: result.results.slice(0, 5).map(el => el.backdrop_path),
        homeImage: res.homeImage || result.results[0],
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
    console.log(state);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
