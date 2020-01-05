import React from "react";

import { StyledHomeImage } from "./home-image.styles";

const HomeImage = ({ image, title, text }) => (
  <StyledHomeImage image={image}>
    <div className="home-image-content">
      <div className="home-image-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </StyledHomeImage>
);

export default HomeImage;
