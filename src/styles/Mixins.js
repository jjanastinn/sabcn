import { css } from 'styled-components';

export const Scroll = css`
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ColumnBorder = css`
  border-right: 10px solid var(--white);
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
`

export const BlackoutFont = css`
  font-family: 'blackoutmidnight', sans-serif;
  letter-spacing: .5px;
`