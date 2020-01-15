import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    transition: all 0.3s;
    object-fit: cover;
    /* border-radius: 4px; */
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  h4 {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    color: #fff;
    /* text-shadow: 2px 1px #000; */
    background: linear-gradient(to bottom, transparent, #1c1c1c 100%);
    padding: 10px;
    margin: 5px 0;

    :hover {
      color: transparent;
      background: rgba(0, 0, 0, 0);
    }
  }
`;
