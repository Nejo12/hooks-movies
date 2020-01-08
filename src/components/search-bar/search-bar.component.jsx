import React, { useState, useRef } from "react";

import {
  StyledSearchBar,
  StyledSearchBarContent,
  StyledSearchIcon
} from "../search-bar/search-bar.styles";

const SearchIcon = require("../../images/search_icon.svg");

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");

  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <StyledSearchIcon
          src={SearchIcon}
          alt="search-icon"
          style={{ width: "45px" }} // with Style.component can also be applied within component.
        />

        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
