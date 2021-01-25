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

  @media ${device.desktopLarge} {
    left: calc((100vw - 1500px)/2 + 1010px);
  }
`