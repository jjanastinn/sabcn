import styled from 'styled-components';
import { ColumnBorder, Scroll } from '../../styles/Mixins';

export const Wrapper = styled.div`
  padding: var(--spacing-large);
  ${ ColumnBorder }
  ${ Scroll }
`