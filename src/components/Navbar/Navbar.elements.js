import styled from 'styled-components';
import { ColumnBorder, Scroll } from '../../styles/Mixins';

export const Nav = styled.nav`
  padding: var(--spacing-large);
  ${ ColumnBorder }
  ${ Scroll }
`

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-color: var(--black);
  height: 100%;
`

export const Link = styled.a`
  display: block;
  padding: var(--spacing-small);
`

export const Text = styled.p`
  transform: rotate(-90deg) translateX(50%);
  white-space: nowrap;
  font-size: 0.8rem;
  padding-left: var(--spacing-small);
`