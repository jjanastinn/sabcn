import styled from 'styled-components';
import { Scroll, BlackoutFont } from '../../styles/Mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: var(--spacing-large);
  ${Scroll}
`

export const TextBlock = styled.div`
  flex-grow: 1;
  & > * { 
    margin: var(--spacing-large) 0;
  }
`

export const Meta = styled.p`
  font-size: 1rem;
  ${BlackoutFont}
`