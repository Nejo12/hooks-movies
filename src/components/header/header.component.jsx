import React from "react";

import SearchBar from "../search-bar/search-bar.component";

import { StyledHeader, StyledHeaderLogo } from "./header.styles";

const Logo = require("../../images/tmdb_logo.svg");

const Header = () => (
  <StyledHeader className="header-content">
    <StyledHeaderLogo src={Logo} alt="header-logo" />
    {/* <SearchBar callback={searchMovies} /> */}
  </StyledHeader>
);

export default Header;
