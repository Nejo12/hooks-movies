import React from "react";
import { Link } from "@reach/router";

import { StyledHeaderContent } from "./header.styles";

const Logo = require("../../images/tmdb_logo.svg");

const Header = () => (
  <StyledHeaderContent>
    <Link to="/">
      <img src={ Logo } alt="header-logo" />
    </Link>
  </StyledHeaderContent>
)

export default Header;
