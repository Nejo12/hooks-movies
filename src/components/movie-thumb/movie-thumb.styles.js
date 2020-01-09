import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 4px;
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

  h3 {
    position: absolute;
    bottom: 0px;
    left: 0px;

    width: 100%;
    color: #fff;
    /* text-shadow: 2px 1px #000; */
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 5px 0;

    :hover {
      color: transparent;
      background: rgba(0, 0, 0, 0);
    }
  }

  /* h3 span {
    color: white;
    font: bold 24px/45px Helvetica, Sans-Serif;
    letter-spacing: -1px;  
    background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.4);
    padding: 10px;
  } */
`;
