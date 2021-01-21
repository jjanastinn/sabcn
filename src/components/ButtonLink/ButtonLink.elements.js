import styled from 'styled-components';
import { BlackoutFont } from '../../styles/Mixins';

export const LinkItem = styled.a`
  display: inline-block;
  background-color: var(--white);
  color: var(--black);
  padding: 8px;
  ${BlackoutFont}
`