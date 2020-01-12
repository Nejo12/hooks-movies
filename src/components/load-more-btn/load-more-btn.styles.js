import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background-color: #3c84cc; /* For browsers that do not support gradients */
  background: radial-gradient(
    ellipse farthest-corner at 0 140%,
    #3c84cc 0%,
    #316dc2 70%,
    #4e95d3 70%
  );
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
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    border: 1px solid #3c84cc;
    opacity: 0.8;

    /* help from stackoverflow */
    background-color: #3c84cc; /* For browsers that do not support gradients */
    background: radial-gradient(
      ellipse farthest-corner at 0 140%,
      #4e95d3 0%,
      #3c84cc 70%,
      #316dc2 70%
    );
  }
`;
