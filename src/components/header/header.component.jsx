import React from "react";
import { Link } from "@reach/router";

import { StyledHeader } from "./header.styles";

const Logo = require("../../images/tmdb_logo.svg");

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <h2 className="header-text">Raw Movies</h2>
      <img src={Logo} alt="header-logo" />
    </Link>
  </StyledHeader>
);

export default Header;
