import styled from "styled-components";

export const StyledActor = styled.div`
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const StyledActorName = styled.div`
  display: block;
  font-size: 18px;
  margin: 10px 0 0 0;
`;

export const StyledActorCharacter = styled.div`
  display: block;
  font-size: 16px;
  margin: 0 0 10px 0;
`;
