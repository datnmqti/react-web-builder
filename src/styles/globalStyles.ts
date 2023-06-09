import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Roboto, Helvetica, sans-serif;
    background-color: #fafafa;
  }
`;

export default GlobalStyle;
