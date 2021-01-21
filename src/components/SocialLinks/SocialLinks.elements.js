import styled from 'styled-components';

export const SocialWrapper = styled.ul`
  display: flex;
  flex-flow: ${props => props.orientation ? 'column' : 'initial'};
  margin: var(--spacing-small) auto;
  li {
    margin: ${props => props.orientation ? '0 0 10px' : '0 0 0 10px'};
  }
`

export const SocialLink = styled.li`
  height: 30px;
  width: 30px;
`