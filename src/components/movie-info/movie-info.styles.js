import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const StyledMovieInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : "#000"};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  animation: animateMovieinfo 1s;

  @media screen and (max-width: 720px) {
    background: none;
  }

  h4 {
    /* props from movieThumb */
    display: none;
  }

  img {
    border-radius: 20px 0 0 0;
  }

  .movieinfo-content {
    position: relative;
    max-width: 1280px;
    min-height: 450px;
    margin: 30px auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px 20px 0 0;
    border-bottom: 3px solid #fff;

    @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: column;
    }
  }

  .movieinfo-thumb {
    width: 300px;
    float: left;
  }

  .movieinfo-text {
    padding: 40px;
    overflow: hidden;
    border-left: 2px solid #fff;

    h1 {
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
  }

  .director,
  .genre,
  .release-date {
    margin-left: 40px;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;

    .release-date {
      display: none;
    }
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
