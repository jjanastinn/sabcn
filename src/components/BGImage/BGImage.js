import React from 'react';
import { BGImg } from './BGImage.elements';

const BGImage = ({ image, children, className }) => {
  return (
    <BGImg imageLink={image} className={className}>
      {children}
    </BGImg>
  )
};

export default BGImage;
