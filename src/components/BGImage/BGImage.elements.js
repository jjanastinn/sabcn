import styled from 'styled-components';

export const BGImg = styled.div`
  background-image: url(${props => props.imageLink});
  background-size: cover;
  background-position: center;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
