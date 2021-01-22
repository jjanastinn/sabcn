import styled from 'styled-components';
import { device } from '../../styles/Breakpoints';

export const Divider = styled.div`
  position: absolute;
  height: 100vh;
  width: 10px;
  background-color: var(--white);
  left: calc(100vw/3*2 + 10px);

  @media ${device.mobile} {
    display: none;
  }
`