import styled from "styled-components";

export const StyledHomeImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      0%, rgba(0,0,0,0.5)
      100%
    ),
    url('${props.image}'), #17202a`};
  position: relative;
  width: 100%;
  height: 600px;
  margin-top: 70px;
  background-size: 100%, cover !important;
  background-position: center, center !important;
  animation: animateHomeImage 1s;
`;

export const StyledHomeImageContent = styled.div`
  background: linear-gradient(to bottom, transparent 60%, #17202a 100%);
  position: absolute;
  max-width: 900px;
  min-height: 50px;
  color: #fff;
  padding: 20px;
  bottom: 40px;
  border-left: 2px solid #fff;
  margin: 20px auto 20px 40px;
`;

export const StyledHomeImageText = styled.div`
  padding: 0 10px;

  h1 {
    font-size: 2rem;
    font-family: "Nunito", sans-serif;

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    line-height: 1.3rem;

    @media screen and (max-width: 720px) {
      font-size: 0.7rem;
      line-height: 0.8rem;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }

  @keyframes animateHomeImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
