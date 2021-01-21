import React from 'react';
import { Nav, Link, Headline } from './Navbar.elements';
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
      <Link href='/'>
        <Headline>streetart bcn</Headline>
      </Link>
      <SocialLinks data={social} vertical='true'></SocialLinks>
    </Nav>
  );
}

export default Navbar;