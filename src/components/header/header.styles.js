import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 20%;
  padding-left: 50px;

  /* background-color: #316dc2; 
  background: radial-gradient(
    ellipse farthest-corner at 0 140%,
    #3c84cc 0%,
    #316dc2 70%,
    #4e95d3 70%
  ); */

  background-color: #316dc2;
  background: radial-gradient(circle at top left, yellow, #f06d06 50%);

  .header-content {
    /* min-height: 120px; */
    padding: 5px 10px;
    box-sizing: border-box;

    /* .header-text {
      font-family: "Permanent Marker", cursive;
      text-decoration: none;
      color: yellow;
      float: left;
      font-size: 3vw;
      margin-top: 20px;
      overflow: hidden;
      white-space: nowrap;
    } */

    img {
      max-width: 40%;
      width: 45%;
      margin: 10px;
      padding: 5px auto;
    }

    @media screen and (max-width: 750px) {
      .header-text {
        font-size: 4vw;
      }

      img {
        width: 25%;
      }
    }
  }
`;
