import React from 'react';
import { LinkItem } from './ButtonLink.elements';

const ButtonLink = (props) => {
  return (
    <LinkItem href={props.hrefLink} target='_blank'>
      {props.children}
    </LinkItem>
  )
};

export default ButtonLink;
