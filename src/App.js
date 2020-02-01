import React, { lazy, Suspense } from "react";
import { Router, Redirect } from "@reach/router";

// import Home from "./pages/home/home.component";
// import Movie from "./pages/movies/movie.component";
// import Upcoming from "./pages/upcoming/upcoming.component";
// import NotFound from "./pages/not-found/not-found.component";

import GlobalStyles from "./global-styles";
import Spinner from "./components/spinner/spinner.component";
import ErroBoundary from "./components/error-boundary/error-boundary";

const Home = lazy(() => import("./pages/home/home.component"));
const Movie = lazy(() => import("./pages/movies/movie.component"));
const Upcoming = lazy(() => import("./pages/upcoming/upcoming.component"));
const NotFound = lazy(() => import("./pages/not-found/not-found.component"));

const App = () => (
  <div className="App">
    <ErroBoundary>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Home path="/" />
          <Movie path=":movieId" />
          <Upcoming path="upcoming" />
          <NotFound path="notfound" />
          <Redirect from="upcoming/:movieId" to="/:movieId" noThrow />
        </Router>
      </Suspense>
    </ErroBoundary>

    <GlobalStyles />
  </div>
);

export default App;
