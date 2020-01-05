import React from "react";
import { StyledGrid, StyledGridContent } from "./grid.styles";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h2>{header}</h2>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

export default Grid;
