import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background-color: #f06d06;
  background: radial-gradient(circle at top left, yellow, #f06d06 30%);
  color: #fff;
  width: 20%;
  min-width: 200px;
  height: 70px;
  border-radius: 4px;
  font-size: 28px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;
  cursor: pointer;

  :hover {
    /* help from stackoverflow */
    opacity: 0.8;
    background: radial-gradient(circle at top right, yellow, #f06d06 20%);
  }
`;
