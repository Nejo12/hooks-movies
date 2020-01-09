import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/home/home.component";
import Movie from "./pages/movies/movie.component";
import NotFound from "./pages/not-found/not-found.component";

import GlobalStyles from "./global-styles";

const App = () => (
  <div className="App">
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyles />
  </div>
);

export default App;
