import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #353535;
  color: #fff;
  margin: 0 auto;
  padding: 0 20px;
  position: fixed;
  z-index: 5;

  p {
    font-size: 20px;
    float: left;
    color: #fff;
    padding-right: 10px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
