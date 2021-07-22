import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 20%;
  max-width: 300px;
  border: 1px solid red;
  padding-left: 50px;
  background-color: #316dc2;
  background: radial-gradient(circle at top left, yellow, #f06d06 50%);
`;

export const StyledHeaderContent = styled.div`
  padding: 5px 15px;
  
  img {
    height: 60px;
    width: 70%;
    min-width: 100px;
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
