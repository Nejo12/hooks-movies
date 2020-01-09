import React from "react";
import { Link } from "@reach/router";

import { StyledMovieThumb } from "./movie-thumb.styles";

const MovieThumb = ({ movieId, image, movieName, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="moviethumb" />
    )}
    <h3>
      <span>{movieName}</span>
    </h3>
  </StyledMovieThumb>
);

export default MovieThumb;
