import styled from 'styled-components';
import { device } from '../../styles/Breakpoints';

export const SocialWrapper = styled.ul`
  display: flex;
  flex-flow: ${props => props.orientation ? 'column' : 'initial'};
  margin: var(--spacing-small) auto;
  li {
    margin: ${props => props.orientation ? '0 0 10px' : '0 10px 0 0'};
  }

  @media ${device.mobile} {
    flex-flow: initial;
    margin: 0 var(--spacing-large);
    li {
      margin: 0 10px 0 0;
      &:last-child { margin-right: 0; }
    }
  }

  @media ${device.mobileSmall} {
    display: none;
  }
`

export const SocialLink = styled.li`
  height: 30px;
  width: 30px;
`