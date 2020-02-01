import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 20%;
  padding-left: 50px;
  background-color: #316dc2;
  background: radial-gradient(circle at top left, yellow, #f06d06 50%);
`;

export const StyledHeaderContent = styled.div`
  padding: 5px 10px;
  box-sizing: border-box;

  img {
    max-width: 40%;
    width: 45%;
    margin: 10px;
    padding: 5px auto;
  }

  @media screen and (max-width: 750px) {
    padding: 0;
    .header-text {
      font-size: 4vw;
    }
    .FontAwesomeIcon {
      margin-top: 20px;
      margin-left: -25px;
    }

    img {
      display: none;
    }
  }
`;
