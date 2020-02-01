import React, { useState } from "react";

import { useHomeFetch } from "../../hooks/useHomeFetch";

const Carousel = () => {
  const [
    {
      state: { currentPage, totalPages, movies, homeImage, carouselImages },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  console.log(carouselImages);
  const [current, setCurrent] = useState(carouselImages);

  console.log(current);

  return <h1>Hello</h1>;
};
export default Carousel;
