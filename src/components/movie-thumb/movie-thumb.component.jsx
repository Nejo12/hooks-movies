import React from "react";

import { StyledMovieThumb } from "./movie-thumb.styles";

const MovieThumb = ({ image, movieName, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="moviethumb" />
    ) : (
      <img src={image} alt="moviethumb" />
    )}
    <h3>
      <span>{movieName}</span>
    </h3>
  </StyledMovieThumb>
);

export default MovieThumb;
