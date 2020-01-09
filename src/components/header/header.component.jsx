import React from "react";
import { Link } from "@reach/router";

import { StyledHeader, StyledHeaderLogo } from "./header.styles";

const Logo = require("../../images/tmdb_logo.svg");

const Header = () => (
  <StyledHeader className="header-content">
    <Link to="/">
      <StyledHeaderLogo src={Logo} alt="header-logo" />
    </Link>
  </StyledHeader>
);

export default Header;
