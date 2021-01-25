import { css } from 'styled-components';
import { device } from './Breakpoints';
import blackoutmidnight from '../assets/Blackout-Midnight.ttf';

export const BlackoutFont = css`
  @font-face {
    font-family: blackoutmidnight;
    src: url(${blackoutmidnight}) format('truetype');
  }
  font-family: 'blackoutmidnight', sans-serif;
  letter-spacing: .5px;
`

export const Scroll = css`
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.mobile} {
    height: fit-content;
    overflow-y: hidden;
    overflow-x: scroll;
  }
`

export const ColumnBorder = css`
  border-right: 10px solid var(--white);

  @media ${device.mobile} {
    border-right: none;
    border-bottom: 7px solid var(--white);
  }
`

export const DoubleColumnSubgrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  > * {
    &:first-child {
      margin-right: 10px;
    }
    padding: var(--spacing-large);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    > *:first-child {
      padding-right: 0;
      margin-right: 0;
      ${ColumnBorder}
    }
  }
`