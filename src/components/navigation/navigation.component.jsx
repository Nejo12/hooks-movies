import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { StyledNavigation } from "./navigation.styles";

const Navigation = ({ movie }) => {
  return (
    <StyledNavigation>
      <Link to="/">
        <p> Home </p>
        <FontAwesomeIcon icon={faHome} color="#fff" transform="down-20" />
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </StyledNavigation>
  );
};

export default Navigation;
