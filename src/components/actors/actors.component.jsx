import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import {
  StyledActor,
  StyledActorName,
  StyledActorCharacter
} from "./actors.styles";

const NoImage = require("../../images/no_image.jpg");

const Actors = ({ actor }) => (
  <StyledActor>
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      }
      alt="actor-thumb"
    />
    <StyledActorName>{actor.name}</StyledActorName>
    <StyledActorCharacter>{actor.character}</StyledActorCharacter>
  </StyledActor>
);

export default Actors;
