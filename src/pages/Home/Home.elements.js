import styled from 'styled-components';
import { BGImage } from '../../components';
import { DoubleColumnSubgrid } from '../../styles/Mixins';

export const DoubleColumn = styled.div`
  ${DoubleColumnSubgrid}
`

export const BGImg = styled(BGImage)`
  height: 100%;
  ${DoubleColumn} > div:first-of-type & {
    background-position: 10%;
  }
`