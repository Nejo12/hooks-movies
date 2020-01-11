import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledActor } from "./actors.styles";

const NoImage = require("../../images/no_image.jpg");

const Actors = ({ actor }) => (
  <div>
    <StyledActor>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actor-thumb"
      />

      <span className="actor-name">{actor.name}</span>
      <span className="actor-character">{actor.character}</span>
    </StyledActor>
  </div>
);

export default Actors;
