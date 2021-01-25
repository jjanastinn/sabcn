import React from 'react';
import { Nav, Headline } from './Navbar.elements';
import { SocialLinks } from '../index';

const social = [
  {
    "facebook": "#"
  },
  {
    "instagram": "#"
  },
  {
    "twitter": "#"
  }
];

const Navbar = () => {
  return (
    <Nav>
      <a href='/sabcn'>
        <Headline>streetart bcn</Headline>
      </a>
      <SocialLinks data={social} vertical='true'></SocialLinks>
    </Nav>
  );
}

export default Navbar;