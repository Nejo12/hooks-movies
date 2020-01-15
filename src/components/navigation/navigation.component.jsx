import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

import { StyledNavigation } from "./navigation.styles";

const Navigation = ({ movie }) => {
  return (
    <StyledNavigation>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} color="#fff" size="lg" />
        {"  "}
        <FontAwesomeIcon icon={faArrowAltCircleLeft} color="#fff" size="lg" />
      </Link>
      <p style={{ color: "yellow" }}>|</p>
      <p>{movie}</p>
    </StyledNavigation>
  );
};

export default Navigation;
