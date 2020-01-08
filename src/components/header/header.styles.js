import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 30px;
  /* background: #1c1c1c; */
  /* display: flex;
  justify-content: space-between; */

  /* .header-content { */
  /* max-width: 1280px; */
  /* min-height: 80px; */
  /* padding: 20px 0px; */
  /* margin: 0 auto; */

  @media screen and (max-width: 500px) {
    /* width: 1280px; */
    /* min-height: 0px; */
  }
  /* } */
`;

export const StyledHeaderLogo = styled.img`
  max-width: 150px;
  width: 80%;
  margin: 10px 0;

  @media screen and (max-width: 620px) {
    /* width: 15%; */
  }
`;
