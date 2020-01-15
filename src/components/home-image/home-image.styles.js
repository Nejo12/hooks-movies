import styled from "styled-components";

export const StyledHomeImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      70%, rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), #1c1c1c`};
  position: relative;
  width: 100%;
  height: 600px;
  background-size: 100%, cover !important;
  background-position: center, center !important;
  animation: animateHomeImage 1s;

  .home-image-content {
    padding: 20px;
    background: pink;
  }

  .home-image-text {
    background: linear-gradient(to bottom, transparent, #1c1c1c 100%);
    position: absolute;
    max-width: 900px;
    color: #fff;
    bottom: 40px;
    margin: 20px;
    min-height: 100px;
    padding: 0 30px 0 10px;
    border-left: 2px solid #fff;

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
