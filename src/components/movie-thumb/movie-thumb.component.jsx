import React from "react";

import { StyledMovieThumb } from "./movie-thumb.styles";

const MovieThumb = ({ image, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="moviethumb" />
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
