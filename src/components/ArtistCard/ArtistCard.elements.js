import styled from 'styled-components';
import { Scroll, BlackoutFont } from '../../styles/Mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: var(--spacing-large);
  ${Scroll}
`

export const Background = styled.div`
  background-color: var(--black);
  flex-grow: 1;
`

export const Meta = styled.p`
  font-size: 1rem;
  ${BlackoutFont}
`