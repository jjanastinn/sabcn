import styled from 'styled-components';

export const BGImg = styled.div`
  background-image: url(${props => props.imageLink});
  background-size: cover;
  background-position: center;
  border: var(--spacing-small) solid var(--black);
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
