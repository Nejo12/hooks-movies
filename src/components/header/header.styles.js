import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 30%;
  padding-left: 20px;
  background-color: #316dc2; /* For browsers that do not support gradients */
  background: radial-gradient(
    ellipse farthest-corner at 0 140%,
    #3c84cc 0%,
    #316dc2 70%,
    #4e95d3 70%
  );

  .header-text {
    font-family: "Permanent Marker", cursive;
    text-decoration: none;
    color: yellow;
    float: right;
    width: 75%;
    font-size: 3vw;
    margin-top: 30px;
    overflow: hidden;
    white-space: nowrap;
  }

  img {
    max-width: 40%;
    width: 20%;
    margin: 10px 10px 15px 0;
  }
  @media screen and (max-width: 735px) {
    .header-text {
      width: 100%;
      font-size: 4vw;
    }

    img {
      float: right;
      margin-top: -75px;
    }
  }
`;
