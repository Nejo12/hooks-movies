import React from "react";

import { StyledSpinner } from "./spinner.styles";

const Spinner = () => (
  <div>
    <StyledSpinner />

    <p style={{ textAlign: "center" }}>Loading . . . </p>
  </div>
);

export default Spinner;
