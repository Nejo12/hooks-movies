import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 80px;
  /* padding: 25px 20px; */
  margin: 10px 5px;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 250px;
  width: 100%;
  height: 55px;
  margin: 10px auto;
  position: relative;
  /* display: flex; */
  /* justify-content: flex-end; */

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 1s;
  }
  :hover::after {
    width: 100%;
  }

  input {
    font-size: 20px;
    position: absolute;
    left: 40px;
    margin-bottom: 5px;
    padding: 10px 0;
    border: 0;
    height: 35px;
    background: transparent;
    color: #fff;

    :focus::placeholder {
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
