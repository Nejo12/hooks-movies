import React from "react";

import { StyledHeader, StyledHeaderLogo } from "./header.styles";

// import { ReactComponent as Logo } from "../../images/download.jpeg";
const Logo = require("../../images/react.svg");

const Header = () => (
  <StyledHeader className="header-content">
    <StyledHeaderLogo src={Logo} alt="header-logo" />
  </StyledHeader>
);

export default Header;
