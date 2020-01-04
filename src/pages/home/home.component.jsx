import React from "react";

import HomeImage from "../../components/home-image/home-image.component";
import Search from "../../search/search.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import Spinner from "../../components/spinner/spinner.component";

const Home = () => (
  <div>
    <HomeImage />
    <Search />
    <MovieThumb />
    <Spinner />
  </div>
);

export default Home;
