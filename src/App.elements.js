import styled from 'styled-components';
import { device } from './styles/Breakpoints';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 2fr;
  margin: auto;
  max-width: 1500px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 2fr;
    height: 100vh;
  }
`