import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(3, 1fr);
  > * {
    border-right: 10px solid var(--black);
    padding: var(--spacing-large);
  }
`