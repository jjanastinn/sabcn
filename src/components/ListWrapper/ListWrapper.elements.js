import styled from 'styled-components';
import { Scroll } from '../../styles/Mixins';
import { device } from '../../styles/Breakpoints';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: var(--spacing-large);

  @media ${device.mobile} {
    grid-template-columns: ${props => `repeat(${props.children.length}, minmax(150px, 1fr))`};
    ${Scroll}
  }
`