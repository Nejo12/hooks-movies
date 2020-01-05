import React from "react";

import HomeImage from "../../components/home-image/home-image.component";
import Search from "../../search/search.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import Spinner from "../../components/spinner/spinner.component";

import { useHomeFetch } from "../../hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  if (error)
    return (
      <div style={{ fontSize: "48px", textAlign: "center" }}>
        Nejo! Something went wrong...
      </div>
    );
  if (!state.movies[0]) return <Spinner />;

  return (
    <div>
      <HomeImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.homeImage.backdrop_path}`}
        title={state.homeImage.title}
        text={state.homeImage.overview}
      />
      <Search />
      <MovieThumb />
      <Spinner />
    </div>
  );
};

export default Home;
