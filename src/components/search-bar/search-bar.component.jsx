import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  StyledSearchBarContainer,
  StyledSearchBarContent
} from "../search-bar/search-bar.styles";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");

  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 1000);
  };

  return (
    <StyledSearchBarContainer>
      <StyledSearchBarContent>
        <input
          type="text"
          placeholder="Search Movies . . ."
          onChange={doSearch}
          value={state}
        />
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </StyledSearchBarContent>
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
