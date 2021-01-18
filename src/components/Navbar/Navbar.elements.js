import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100vh;
`

export const Link = styled.a`
  display: block;
  padding: var(--spacing-small);
`

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: calc(100%);
  background-color: var(--black);
  color: var(--white);
`

export const Text = styled.p`
  transform: rotate(-90deg) translateX(50%);
  white-space: nowrap;
  font-size: 0.8rem;
  padding-left: var(--spacing-small);
`