import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: var(--spacing-large);
  list-style-type: none;
`

export const Headline = styled.h2`
  background-color: var(--black);
  color: var(--white);
  padding: 5px 10px;
  margin-bottom: var(--spacing-large);
  text-transform: uppercase;
  font-weight: 100;
`