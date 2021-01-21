import { createGlobalStyle } from 'styled-components';
import blackoutmidnight from './assets/Blackout-Midnight.ttf';
import { BlackoutFont } from './styles/Mixins';

const GlobalStyle = createGlobalStyle`

  // TYPO
  @font-face {
    font-family: blackoutmidnight;
    src: url(${blackoutmidnight}) format('truetype');
  }

  // VARIABLES
  :root {
    --black: #080808;
    --white: #fff;
    --spacing-small: 10px;
    --spacing-large: 20px;
    --text-padding: 5px 10px;
  }

  // GLOBAL
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-y: hidden;
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  img {
    width: 100%;
    border: var(--spacing-small) solid var(--black);
  }

  ul {
    list-style-type: none;
  }

  h1 {
    margin: var(--spacing-small);
    color: var(--black);
    word-break: break-all;
    font-size: 3vw;
    ${BlackoutFont}
  }

  h2 {
    padding: var(--text-padding);
    margin-bottom: var(--spacing-large);
    background-color: var(--black);
    font-size: 1.5rem;
    ${BlackoutFont}
  }

  h3 {
    font-size: 1rem;
    ${BlackoutFont}
  }

  p {
    padding: var(--text-padding);
    line-height: 1.3;
  }
`;

export default GlobalStyle;