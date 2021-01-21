import React from 'react';
import { SocialWrapper, SocialLink } from './SocialLinks.elements';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter.svg';

const SocialNetwork = (objKey) => {
  switch (objKey) {
    case 'facebook': {
      return <FacebookIcon />;
    }
    case 'instagram': {
      return <InstagramIcon />;
    }
    case 'twitter': {
      return <TwitterIcon />;
    }
    default: {
      return
    }
  }
};

const SocialLinks = ({ data, vertical }) => {
  return (
    <SocialWrapper orientation={vertical}>
      {data.map((item, index) => (
        <SocialLink key={index}>
          <a href={Object.entries(item)[0][1]}>
            {SocialNetwork(Object.entries(item)[0][0])}
          </a>
        </SocialLink>
      ))}
    </SocialWrapper>
  )
};

export default SocialLinks;
