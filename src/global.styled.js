/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
    background-color: rgba(116, 68, 153, 0.85);
  }

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
