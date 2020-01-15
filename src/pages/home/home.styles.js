import styled from "styled-components";

export const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  top: 0px;
  width: 100%;
  max-height: 100px;
  height: 70px;
  position: fixed;
  z-index: 999;
  background: #17202a;

  .header-icons {
    flex-direction: column;
    align-self: center;
    text-align: center;
    padding: 10px;
  }
`;
