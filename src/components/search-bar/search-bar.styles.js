import styled from "styled-components";

export const StyledSearchBar = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 85px;
  padding: 25px 20px 0px 20px;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  padding-right: 30px;
  border: 0;
  position: relative;
  /* display: flex; */
  /* justify-content: flex-end; */

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.5s;
  }
  :hover::after {
    width: 100%;
  }

  input {
    font-size: 20px;
    position: absolute;
    left: 40px;
    margin: 8px 0;
    padding: 10px 0;
    border: 0;
    width: 95%;
    height: 30px;
    background: transparent;
    color: #fff;

    :hover::placeholder {
      color: transparent;
      transition: 0.5s;
    }

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 16px;
    }
  }
`;
