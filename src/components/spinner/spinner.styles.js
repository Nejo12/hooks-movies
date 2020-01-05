import styled from "styled-components";

export const StyledSpinner = styled.div`
  border: 5px solid transparent;
  border-top: 5px solid limegreen;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 20px auto;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
