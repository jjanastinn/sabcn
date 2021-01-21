import styled from 'styled-components';
import { ColumnBorder, Scroll } from '../../styles/Mixins';

export const Nav = styled.nav`
  ${ColumnBorder}
  ${Scroll}
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`

export const Link = styled.a`
  display: block;
  padding: var(--spacing-small);
`

export const Headline = styled.h1`
  transform: rotate(-90deg) translateX(50%);
  white-space: nowrap;
`