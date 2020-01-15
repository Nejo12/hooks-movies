import React from "react";

import { StyledSpinner } from "./spinner.styles";

const Spinner = () => (
  <div>
    <StyledSpinner />

    <p style={{ textAlign: "center" }}>Reload the page to Search again. </p>
  </div>
);

export default Spinner;
