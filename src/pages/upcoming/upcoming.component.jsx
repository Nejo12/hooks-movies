import React, { useState } from "react";

import Header from "../../components/header/header.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Grid from "../../components/grid/grid.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import Spinner from "../../components/spinner/spinner.component";
import LoadMoreBtn from "../../components/load-more-btn/load-more-btn.component";

import { useUpcomingFetch } from "../../hooks/useUpcomingFetch";

import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  UPCOMING_BASE_URL
} from "../../config";

import { StyledHeaderContent } from "../home/home.styles";

const NoImage = require("../../images/no_image.jpg");

const Upcoming = () => {
  const [{ state, loading, error }, fetchUpcoming] = useUpcomingFetch();
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(state);

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage +
      1}`;
    const upcomingEndpoint = `${UPCOMING_BASE_URL}&page=${state.currentPage +
      1}`;

    const endpoint = searchTerm ? searchEndpoint : upcomingEndpoint;

    fetchUpcoming(endpoint);
  };

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : UPCOMING_BASE_URL;

    setSearchTerm(search);
    fetchUpcoming(endpoint);
  };

  if (error)
    return (
      <div style={{ fontSize: "48px", textAlign: "center" }}>
        Nejo! Error fetching upcoming movies...
      </div>
    );
  if (!state.movies[0]) return <Spinner />;

  return (
    <div className="upcoming-container" style={{ marginTop: "8rem" }}>
      <StyledHeaderContent className="header-content">
        <Header />
        <SearchBar callback={searchMovies} />
      </StyledHeaderContent>

      <Grid header={searchTerm ? "Search Result" : "Upcoming Movies"}>
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
            movieName={movie.title}
            releaseDate={movie.release_date}
          />
        ))}
      </Grid>

      {!loading && <Spinner />}
      {state.currentPage < state.totalPages && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </div>
  );
};

export default Upcoming;
