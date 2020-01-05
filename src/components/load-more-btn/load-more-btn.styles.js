import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background: #000;
  width: 20%;
  min-width: 200px;
  height: 70px;
  color: #fff;
  transition: all 0.3s;
  border-radius: 4px;
  font-family: "Abel", sans-serif;
  font-size: 28px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    color: #000;
    background: #fff;
    border: 1px solid #000;
  }
`;
