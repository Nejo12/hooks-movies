import React from "react";
import { Router, Redirect } from "@reach/router";

import Home from "./pages/home/home.component";
import Movie from "./pages/movies/movie.component";
import Upcoming from "./pages/upcoming/upcoming.component";
import NotFound from "./pages/not-found/not-found.component";

import GlobalStyles from "./global-styles";

const App = () => (
  <div className="App">
    <Router>
      <Home path="/" />
      <Movie path=":movieId" />
      <Upcoming path="upcoming" />
      <Redirect from="upcoming/:movieId" to="/:movieId" noThrow />
      <NotFound path="notfound" />
    </Router>
    <GlobalStyles />
  </div>
);

export default App;
