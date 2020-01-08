import React from "react";

import { StyledHeader, StyledHeaderLogo } from "./header.styles";

const Logo = require("../../images/tmdb_logo.svg");

const Header = () => (
  <StyledHeader className="header-content">
    <StyledHeaderLogo src={Logo} alt="header-logo" />
  </StyledHeader>
);

export default Header;
