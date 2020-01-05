import React, { useState } from "react";

import HomeImage from "../../components/home-image/home-image.component";
import Search from "../../search/search.component";
import Grid from "../../components/grid/grid.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import Spinner from "../../components/spinner/spinner.component";

import { useHomeFetch } from "../../hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";

const NoImage = require("../../images/download.jpeg");

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

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
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.movies.map(movie => (
          <MovieThumb
            key={movie.id}
            movieId={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieName={movie.original_title}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
