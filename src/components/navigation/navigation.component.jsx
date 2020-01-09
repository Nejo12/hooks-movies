import React from "react";
import { Link } from "@reach/router";

import { StyledNavigation } from "./navigation.styles";

const Navigation = ({ movie }) => {
  return (
    <StyledNavigation>
      <Link to="/">
        <p> Home </p>
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </StyledNavigation>
  );
};

export default Navigation;
