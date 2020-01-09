import React from "react";

import Navigation from "../../components/navigation/navigation.component";
import MovieInfo from "../../components/movie-info/movie-info.component";
import MovieInfoBar from "../../components/movie-info-bar/movie-info-bar.component";
import Actors from "../../components/actors/actors.component";
import Grid from "../../components/grid/grid.component";
import Spinner from "../../components/spinner/spinner.component";

import { useMovieFetch } from "../../hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [state, loading, error] = useMovieFetch(movieId);
  console.log("stateINMovie: ", state);

  return (
    <div>
      <Navigation />
      <MovieInfo />
      <MovieInfoBar />
      <Grid>
        <Actors />
      </Grid>
      <Spinner />
    </div>
  );
};

export default Movie;
