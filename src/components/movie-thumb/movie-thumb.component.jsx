import React from "react";
import { Link } from "@reach/router";

import { StyledMovieThumb } from "./movie-thumb.styles";

const MovieThumb = ({ movieId, image, movieName, clickable, releaseDate }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="moviethumb" />
    )}

    <h4>
      {releaseDate ? (
        <span style={{ color: "orange", textAlign: "center", marginBottom: 0 }}>
          {releaseDate}
        </span>
      ) : (
        <span>{movieName}</span>
      )}
    </h4>
  </StyledMovieThumb>
);

export default MovieThumb;
