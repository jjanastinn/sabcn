import styled from 'styled-components';

export const BGImg = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  border: 10px solid var(--black);
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Title = styled.p`
  background-color: var(--black);
  color: var(--white);
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 5px 10px;
  margin-top: 5px;
`