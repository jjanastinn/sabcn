import { css } from 'styled-components';
import { device } from './Breakpoints';

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
      ${ColumnBorder}
    }
    padding: var(--spacing-large);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    > *:first-child {
      padding-right: 0;
    }
  }
`

export const BlackoutFont = css`
  font-family: 'blackoutmidnight', sans-serif;
  letter-spacing: .5px;
`