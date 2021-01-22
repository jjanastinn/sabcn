import styled from 'styled-components';
import { ColumnBorder, Scroll } from '../../styles/Mixins';
import { device } from '../../styles/Breakpoints';

export const Nav = styled.nav`
  ${ColumnBorder}
  ${Scroll}
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;

  @media ${device.mobile} {
    flex-flow: row;
    justify-content: space-between;
  }
`

export const Headline = styled.h1`
  transform: rotate(-90deg) translateX(50%);
  white-space: nowrap;

  @media ${device.mobile} {
    transform: initial;
    margin: var(--spacing-large);
  }
`