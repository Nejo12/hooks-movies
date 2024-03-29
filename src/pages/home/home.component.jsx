import React, { useState } from "react";
import { Link } from "@reach/router";

import Header from "../../components/header/header.component";
import SearchBar from "../../components/search-bar/search-bar.component";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import { StyledHeaderContent } from "./home.styles";

const NoImage = require("../../images/no_image.jpg");

const Home = () => {
  const [
    {
      state: {
        currentPage,
        totalPages,
        movies,
        homeImage
      },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [ searchTerm, setSearchTerm ] = useState("");

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
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
      <div style={ { fontSize: "48px", textAlign: "center" } }>
        Something went wrong...
      </div>
    );
  if (!movies[ 0 ]) return <Spinner />;

  return (
    <>
      <StyledHeaderContent className="header-content">
        <Header />
        <div className="header-icons">
          <Link to="upcoming">
            <FontAwesomeIcon icon={ faTheaterMasks } color="#fff" size="2x" />
            { "" }
            <br />
            <span
              style={ {
                color: "#fff"
              } }
            >
              Upcoming
            </span>
          </Link>
        </div>
        <SearchBar callback={ searchMovies } />
      </StyledHeaderContent>
      { !searchTerm && (
        <HomeImage
          image={ `${IMAGE_BASE_URL}${BACKDROP_SIZE}${homeImage.backdrop_path}` }
          title={ homeImage.title }
          text={ homeImage.overview }
        />
      ) }
      <Grid header={ searchTerm ? "Search Result" : "Popular Movies" }>
        { movies.map(({ id, poster_path, title }) => (
          <MovieThumb
            key={ id }
            movieId={ id }
            clickable
            image={
              poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
                : NoImage
            }
            movieName={ title }
          />
        )) }
      </Grid>
      { !loading && <Spinner /> }
      { currentPage < totalPages && (
        <LoadMoreBtn text="Load More" callback={ loadMoreMovies } />
      ) }
    </>
  );
};

export default Home;
