import React, { useState } from "react";

import HomeImage from "../../components/home-image/home-image.component";
import Grid from "../../components/grid/grid.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import Spinner from "../../components/spinner/spinner.component";
import LoadMoreBtn from "../../components/load-more-btn/load-more-btn.component";

import { useHomeFetch } from "../../hooks/useHomeFetch";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL
} from "../../config";
import Header from "../../components/header/header.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import { StyledHeaderContent } from "./home.styles";

const NoImage = require("../../images/no_image.jpg");

const Home = () => {
  const [
    {
      state: { currentPage, totalPages, movies, homeImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  console.log(movies);

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage +
      1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  if (error)
    return (
      <div style={{ fontSize: "48px", textAlign: "center" }}>
        Nejo! Something went wrong...
      </div>
    );
  if (!movies[0]) return <Spinner />;

  return (
    <div>
      <StyledHeaderContent className="header-content">
        <Header />
        <SearchBar callback={searchMovies} />
      </StyledHeaderContent>

      {!searchTerm && (
        <HomeImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${homeImage.backdrop_path}`}
          title={homeImage.title}
          text={homeImage.overview}
        />
      )}
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
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
          />
        ))}
      </Grid>
      {!loading && <Spinner />}
      {currentPage < totalPages && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </div>
  );
};

export default Home;
