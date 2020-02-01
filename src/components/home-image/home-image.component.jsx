import React from "react";

import {
  StyledHomeImage,
  StyledHomeImageContent,
  StyledHomeImageText
} from "./home-image.styles";

const HomeImage = ({ image, title, text }) => (
  <StyledHomeImage image={image}>
    <StyledHomeImageContent>
      <StyledHomeImageText>
        <h1>{title}</h1>
        <p>{text}</p>
      </StyledHomeImageText>
    </StyledHomeImageContent>
  </StyledHomeImage>
);

export default HomeImage;
