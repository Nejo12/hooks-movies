import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

import { StyledHeader } from "./header.styles";

const Logo = require("../../images/tmdb_logo.svg");

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        {/* <h2 className="header-text">Raw Movies</h2> */}
        <FontAwesomeIcon icon={faHome} color="#fff" size="2x" />
        <img src={Logo} alt="header-logo" />
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
