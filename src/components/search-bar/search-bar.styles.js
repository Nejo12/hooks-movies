import styled from "styled-components";

export const StyledSearchBar = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 85px;
  padding: 25px 20px 0px 20px;
  /* box-sizing: border-box; */
  /* background: #1c1c1c;
  color: #fff; */
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  /* height: 55px; */
  margin: 0 auto;
  border: 0;
  position: relative;
  /* color: #fff; */

  :hover {
    border-bottom: 2px solid #fff;
    transition: ease-in-out 10s;
  }

  input {
    font-size: 20px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 40px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 30px;
    color: #fff;
    font-family: "Abel", sans-serif;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      /* font-size: 28px; */
    }
  }
`;

export const StyledSearchIcon = styled.img`
  padding: 10px;
`;
