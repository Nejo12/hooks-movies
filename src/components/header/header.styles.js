import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 0 30px;
  background: #1c1c1c;
  border-bottom: 1px solid grey;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledHeaderLogo = styled.img`
  max-width: 120px;
  width: 20%;
  margin: 10px 0;

  @media screen and (max-width: 620px) {
    width: 15%;
  }
`;
