import styled from 'styled-components';
import { ColumnBorder, Scroll } from '../../styles/Mixins';
import { device } from '../../styles/Breakpoints';

export const Wrapper = styled.div`
  padding: var(--spacing-large);
  ${ColumnBorder}
  ${Scroll}

  @media ${device.mobile} {
    padding: var(--spacing-large) 0 var(--spacing-large) var(--spacing-large);
  }
`