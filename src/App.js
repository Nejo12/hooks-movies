import React from "react";

import GlobalStyles from "./global-styles";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <GlobalStyles />
  </div>
);

export default App;
