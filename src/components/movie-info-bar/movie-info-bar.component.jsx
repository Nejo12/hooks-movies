import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

import { calcTime, convertMoney } from "../../helpers";

import { StyledMovieInfoBar } from "./movie-info-bar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesomeIcon className="fa-icon" icon={faClock} spin />
        <span className="movieinfobar-info">
          Running time: {calcTime(time)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesomeIcon className="fa-icon" icon={faMoneyBillAlt} />
        <span className="movieinfobar-info">
          Budget: {convertMoney(budget)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesomeIcon className="fa-icon" icon={faHandHoldingUsd} />
        <span className="movieinfobar-info">
          Revenue {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

export default MovieInfoBar;
