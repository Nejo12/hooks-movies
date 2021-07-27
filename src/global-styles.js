import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    text-decoration: none;
}

body {
    font-family: 'Abel', sans-serif;
    color:#fff;
    margin: 0;
    padding: 0;
    background: #17202a;
}
`;

export default GlobalStyles;
