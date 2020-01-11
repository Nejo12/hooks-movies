import React from "react";

import Navigation from "../../components/navigation/navigation.component";
import MovieInfo from "../../components/movie-info/movie-info.component";
import MovieInfoBar from "../../components/movie-info-bar/movie-info-bar.component";
import Actors from "../../components/actors/actors.component";
import Grid from "../../components/grid/grid.component";
import Spinner from "../../components/spinner/spinner.component";

import { useMovieFetch } from "../../hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log("movieINMovie: ", movie);

  if (error)
    return (
      <div style={{ fontSize: "36px", textAlign: "center" }}>
        Problem displaying the selected movie info. Get Nejo!
      </div>
    );
  if (loading || !movie.title) return <Spinner />;

  return (
    <div>
      <Navigation movie={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar />
      <Grid>
        <Actors actor={movie.actors} />
      </Grid>
    </div>
  );
};

export default Movie;
