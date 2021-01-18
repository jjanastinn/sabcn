import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #080808;
    --white: #fff;
    --spacing-small: 10px;
    --spacing-large: 20px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-y: hidden;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  img {
    width: 100%;
    border: 10px solid var(--black);
  }
`;

export default GlobalStyle;