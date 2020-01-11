import styled from "styled-components";

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Abel", sans-serif;
  font-size: 20px;
  color: #fff;

  .movieinfobar-content {
    width: 100%;
    margin: 0 30px;
  }

  .movieinfobar-content-col {
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: 10px 20px 0 0;
  }

  .movieinfobar-info {
    padding: 5px 0 0 10px;
    /* float: left; */
  }

  @media screen and (max-width: 760px) {
    .fa-icon {
      display: none;
    }
    .movieinfobar-info {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 425px) {
    .movieinfobar-content {
      display: block;
      margin: 0;
      padding: 15px;
    }
  }
`;
