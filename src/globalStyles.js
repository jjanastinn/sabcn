import { createGlobalStyle } from 'styled-components';
import { BlackoutFont } from './styles/Mixins';
import { device } from './styles/Breakpoints';

const GlobalStyle = createGlobalStyle`

  // VARIABLES
  :root {
    --white: #131313;
    --black: #fff;
    --spacing-small: 5px;
    --spacing-large: 15px;
    --text-padding: var(--spacing-small) 0;
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

    @media ${device.mobile} {
      overflow-y: initial;
      overflow-x: hidden;
    }
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  img {
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

  h1 {
    margin: var(--spacing-small);
    word-break: break-all;
    font-size: 2rem;
    ${BlackoutFont}
  }

  h2 {
    padding: var(--text-padding);
    margin-bottom: var(--spacing-large);
    color: var(--white);
    font-size: 1.5rem;
    ${BlackoutFont}
  }

  h3 {
    padding: var(--text-padding);
    font-size: 1rem;
    ${BlackoutFont}
  }

  p {
    color: var(--white);
    line-height: 1.3;
  }
`;

export default GlobalStyle;